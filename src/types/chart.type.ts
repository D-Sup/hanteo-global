export interface ChartType {
  id: string
  agencyName: string
  songTitle: string
  artistName: string
  coverImage: string
  dailyPlayCounts: Record<string, number>
}
