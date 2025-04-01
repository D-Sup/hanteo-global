import { useEffect, useRef } from "react"

interface MainHeader {
  currentTab?: number
  handleFunc: (selectedTab: number) => void
}

const MainHeader = ({ currentTab, handleFunc }: MainHeader) => {
  const navRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const tabs = ["차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"]

  const onMouseDown = (e: React.MouseEvent) => {
    const nav = navRef.current
    if (!nav) return

    isDragging.current = true
    startX.current = e.pageX - nav.offsetLeft
    scrollLeft.current = nav.scrollLeft
  }

  const onMouseMove = (e: React.MouseEvent) => {
    const nav = navRef.current
    if (!isDragging.current || !nav) return

    e.preventDefault()
    const x = e.pageX - nav.offsetLeft
    const walk = x - startX.current
    nav.scrollLeft = scrollLeft.current - walk
  }

  const stopDragging = () => {
    isDragging.current = false
  }

  const tabScrollReconcile = (index: number) => {
    handleFunc(index)

    const nav = navRef.current

    if (nav) {
      const scrollAmount = tabs.length / 2 <= index ? 100 : -100
      nav.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleTabClick = (index: number) => {
    tabScrollReconcile(index)
  }

  useEffect(() => {
    if (currentTab === 0 || currentTab) tabScrollReconcile(currentTab)
  }, [currentTab])

  return (
    <>
      <header className="flex items-center z-50 absolute top-0 w-full h-[40px] bg-accent-foreground">
        <nav
          ref={navRef}
          className="flex w-full overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {tabs.map((label, index) => (
            <button
              key={index}
              className={`w-[80px] h-[40px] shrink-0 text-lg font-bold ${
                currentTab === index ? "text-[#FFF]" : "text-[#000]"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <div className="w-full h-[40px]"></div>
    </>
  )
}

export default MainHeader
