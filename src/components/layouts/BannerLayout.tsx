import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"

import { getBanners } from "../../services/bannerService"

import { Carousel, CarouselContent, CarouselItem } from "../common/carousel"
import NoticeItem from "../ui/NoticeItem"
import EventVoteItem from "../ui/EventVoteItem"

const BannerLayout = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["banner"],
    queryFn: () => getBanners(),
    staleTime: 300000,
    gcTime: 600000,
  })

  return (
    <>
      {isLoading && <p>로딩 중...</p>}
      {isError && <p>에러 발생!</p>}

      <Carousel
        pagination={true}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="drop-shadow-lg"
      >
        <CarouselContent className="m-auto">
          {data?.targetDetails.map((item, index) => (
            <CarouselItem key={index} className="basis-[90%] px-2 transition-transform">
              {item.type === "notice" ? (
                <NoticeItem key={item.id} data={item} />
              ) : (
                <EventVoteItem key={item.id} data={item} />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default BannerLayout
