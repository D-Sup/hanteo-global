import { API_URL } from "../config"
import { ChartType } from "../types"

export const getCharts = async (query = ""): Promise<ChartType[]> => {
  try {
    const res = await fetch(`${API_URL}/chart/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
