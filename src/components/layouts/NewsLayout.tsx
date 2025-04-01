import { useInfiniteQuery } from "@tanstack/react-query"

import { getNews } from "../../services/newsService"

import InfiniteScroll from "../common/InfiniteScroll"

import SkeletonList from "../ui/SkeletonList"
import NewsItem from "../ui/NewsItem"

const NewsLayout = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: ({ pageParam }) => getNews(`_sort=-createdAt&_page=${pageParam}&_limit=6`),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < 6 ? undefined : allPages.length + 1
      },
      initialPageParam: 0,
      staleTime: 300000,
      gcTime: 600000,
    })

  return (
    <>
      {isLoading && <SkeletonList />}
      {isError && <p>에러 발생!</p>}
      {!hasNextPage && !isFetchingNextPage && <p>더 이상 불러올 데이터가 없음</p>}
      <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
        <ul>{data?.pages.flat().map((item) => <NewsItem key={item.id} data={item} />)}</ul>
      </InfiniteScroll>
    </>
  )
}

export default NewsLayout
