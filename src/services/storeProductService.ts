import { API_URL } from "../config"
import { StoreProductType } from "../types"

export const getStoreProducts = async (query = ""): Promise<StoreProductType[]> => {
  try {
    const res = await fetch(`${API_URL}/storeProducts/?${query}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.:", error)
    throw error
  }
}
