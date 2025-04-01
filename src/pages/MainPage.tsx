import { useState, useRef, lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useInView } from "react-intersection-observer"

import MainHeader from "../components/layouts/MainHeader"
import NavigationMenu from "../components/layouts/NavigationMenu"
import BannerLayout from "../components/layouts/BannerLayout"

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../components/common/carousel"

import SkeletonList from "../components/ui/SkeletonList"

const ChartLayout = lazy(() => import("../components/layouts/ChartLayout"))
const CommunityLayout = lazy(() => import("../components/layouts/CommunityLayout"))
const EventVoteLayout = lazy(() => import("../components/layouts/EventVoteLayout"))
const NewsLayout = lazy(() => import("../components/layouts/NewsLayout"))
const StoreProductLayout = lazy(() => import("../components/layouts/StoreProductLayout"))
const ChargingStationLayout = lazy(() => import("../components/layouts/ChargingStationLayout"))

const LazyCarouselItem = ({ Component }: { Component: React.ComponentType }) => {
  const [hasEntered, setHasEntered] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  if (inView && !hasEntered) {
    setHasEntered(true)
  }

  return (
    <div ref={ref} className="h-[calc(900px-320px)] overflow-y-auto scrollbar-hide">
      {hasEntered ? (
        <Suspense fallback={<SkeletonList />}>
          <Component />
        </Suspense>
      ) : (
        <SkeletonList />
      )}
    </div>
  )
}

const MainPage = () => {
  const carouselApiRef = useRef<CarouselApi>(null)
  const [currentTab, setCurrentTab] = useState(0)

  const handleCurrentTab = (selectedTab: number) => {
    carouselApiRef.current?.scrollTo(selectedTab)
  }

  const handleSetApi = (api: CarouselApi) => {
    if (!api) return
    carouselApiRef.current = api

    const onSelect = () => {
      setCurrentTab(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
  }

  const carouselItems = [
    ChartLayout,
    CommunityLayout,
    EventVoteLayout,
    NewsLayout,
    StoreProductLayout,
    ChargingStationLayout,
  ]

  return (
    <>
      <MainHeader currentTab={currentTab} handleFunc={handleCurrentTab} />

      <div className="mt-[15px]">
        <BannerLayout />
      </div>

      <Carousel setApi={handleSetApi}>
        <CarouselContent className="mt-[10px]">
          {carouselItems.map((Component, idx) => (
            <CarouselItem
              key={idx}
              className="h-[calc(900px-320px)] overflow-y-auto scrollbar-hide"
            >
              <LazyCarouselItem Component={Component} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <NavigationMenu />
      <Outlet />
    </>
  )
}

export default MainPage
