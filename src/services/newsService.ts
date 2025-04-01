import { API_URL } from "../config"
import { NewsType } from "../types"

export const getNews = async (query = ""): Promise<NewsType[]> => {
  try {
    const res = await fetch(`${API_URL}/news/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
