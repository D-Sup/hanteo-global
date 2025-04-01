import { useInfiniteQuery } from "@tanstack/react-query"

import { getEventVotes } from "../../services/eventVoteService"

import InfiniteScroll from "../common/InfiniteScroll"

import SkeletonList from "../ui/SkeletonList"
import EventVoteItem from "../ui/EventVoteItem"

const EventVoteLayout = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["eventVote"],
      queryFn: ({ pageParam }) => getEventVotes(`_sort=endAt&_page=${pageParam}&_limit=4`),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < 4 ? undefined : allPages.length + 1
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
        <ul>{data?.pages.flat().map((item) => <EventVoteItem key={item.id} data={item} />)}</ul>
      </InfiniteScroll>
    </>
  )
}

export default EventVoteLayout
