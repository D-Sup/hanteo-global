import { API_URL } from "../config"
import { BannerType } from "../types"

export const getBanners = async (query = ""): Promise<BannerType> => {
  try {
    const res = await fetch(`${API_URL}/banner/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
