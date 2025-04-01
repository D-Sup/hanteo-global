import { API_URL } from "../config"
import { EventVoteType } from "../types"

export const getEventVotes = async (query = ""): Promise<EventVoteType[]> => {
  try {
    const res = await fetch(`${API_URL}/eventVote/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
