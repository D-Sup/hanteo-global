import { useInfiniteQuery } from "@tanstack/react-query"

import { getStoreProducts } from "../../services/storeProductService"

import InfiniteScroll from "../common/InfiniteScroll"

import SkeletonList from "../ui/SkeletonList"
import StoreProductItem from "../ui/StoreProductItem"

const StoreProductLayout = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["storeProduct"],
      queryFn: ({ pageParam }) => getStoreProducts(`_sort=-createdAt&_page=${pageParam}&_limit=12`),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length < 12 ? undefined : allPages.length + 1
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
        <ul className="grid grid-cols-3 gap-4">
          {data?.pages.flat().map((item) => <StoreProductItem key={item.id} data={item} />)}
        </ul>
      </InfiniteScroll>
    </>
  )
}

export default StoreProductLayout
