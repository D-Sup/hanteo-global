import { useQuery } from "@tanstack/react-query"
import { useLocation, useNavigate } from "react-router-dom"
import {
  getBanners,
  getCharts,
  getCommunities,
  getEventVotes,
  getNews,
  getNotices,
  getStoreProducts,
} from "../services"

const DetailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [_, pathKey, id] = location.pathname.split("/")

  const fetcher = async (query: string) => {
    switch (pathKey) {
      case "banner":
        return getBanners(query)
      case "chart":
        return getCharts(query)
      case "community":
        return getCommunities(query)
      case "event":
        return getEventVotes(query)
      case "news":
        return getNews(query)
      case "notice":
        return getNotices(query)
      case "store":
        return getStoreProducts(query)
      default:
        throw new Error("Unknown path: " + pathKey)
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: [pathKey, id],
    queryFn: () => fetcher(`id=${id}`),
    staleTime: 0,
    gcTime: 0,
    enabled: !!pathKey && !!id,
  })
  return (
    <>
      {isLoading && <p>로딩 중...</p>}
      {isError && <p>에러 발생!</p>}
      <header className="w-full h-[50px] ">
        <button className="px-[10px] py-[10px] bg-accent text-white" onClick={() => navigate(-1)}>
          {"< 뒤로가기"}
        </button>
      </header>
      {Array.isArray(data) ? <div>데이터 id: {data[0]?.id}</div> : <div>데이터 없음</div>}
    </>
  )
}

export default DetailPage
