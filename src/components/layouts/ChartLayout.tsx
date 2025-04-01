import { useQuery } from "@tanstack/react-query"

import { getCharts } from "../../services/chartService"

import SkeletonList from "../ui/SkeletonList"
import ChartItem from "../ui/ChartItem"

const ChartLayout = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chart"],
    queryFn: () => getCharts(),
    select: (chartData) =>
      chartData
        .map((item) => ({
          ...item,
          totalPlayCount: Object.values(item.dailyPlayCounts).reduce((sum, v) => sum + v, 0),
        }))
        .sort((a, b) => b.totalPlayCount - a.totalPlayCount),
    staleTime: 300000,
    gcTime: 600000,
  })

  return (
    <>
      {isLoading && <SkeletonList />}
      {isError && <p>에러 발생!</p>}
      <ul>
        {data?.map((item, index) => <ChartItem key={item.id} data={item} rank={index + 1} />)}
      </ul>
    </>
  )
}

export default ChartLayout
