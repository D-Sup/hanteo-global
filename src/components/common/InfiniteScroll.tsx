import { useEffect, useRef } from "react"

interface InfiniteScrollProps {
  hasMore: boolean
  loadMore: () => void
  children: React.ReactNode
}

const InfiniteScroll = ({ hasMore, loadMore, children }: InfiniteScrollProps) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasMore) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore()
      }
    })

    const el = bottomRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
      observer.disconnect()
    }
  }, [hasMore, loadMore])

  return (
    <>
      {children}
      <div ref={bottomRef} style={{ height: 1 }} />
    </>
  )
}

export default InfiniteScroll
