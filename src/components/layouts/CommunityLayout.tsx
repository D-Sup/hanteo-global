import { useInfiniteQuery } from "@tanstack/react-query"

import { getCommunities } from "../../services/communityService"

import InfiniteScroll from "../common/InfiniteScroll"

import SkeletonList from "../ui/SkeletonList"
import CommunityItem from "../ui/CommunityItem"

const CommunityLayout = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["Community"],
      queryFn: ({ pageParam }) => getCommunities(`_page=${pageParam}&_limit=10`),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < 10 ? undefined : allPages.length + 1
      },
      select: (communityData) => ({
        ...communityData,
        pages: communityData.pages.map((page) =>
          page.sort((a, b) => b.subscriberIds.length - a.subscriberIds.length)
        ),
      }),
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
        <ul>
          {data?.pages
            .flat()
            .map((item, index) => <CommunityItem key={item.id} data={item} rank={index + 1} />)}
        </ul>
      </InfiniteScroll>
    </>
  )
}

export default CommunityLayout
