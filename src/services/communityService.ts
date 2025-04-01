import { API_URL } from "../config"
import { CommunityType } from "../types"

export const getCommunities = async (query = ""): Promise<CommunityType[]> => {
  try {
    const res = await fetch(`${API_URL}/community/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
