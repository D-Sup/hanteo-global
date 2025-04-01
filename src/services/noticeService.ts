import { API_URL } from "../config"
import { NoticeType } from "../types"

export const getNotices = async (query = ""): Promise<NoticeType[]> => {
  try {
    const res = await fetch(`${API_URL}/notice/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
