import { useNavigate } from "react-router-dom"

import { ChartType } from "../../types"

interface ChartItemProps {
  data: ChartType
  rank: number
}

const ChartItem = ({ data, rank }: ChartItemProps) => {
  const { id, agencyName, songTitle, artistName, coverImage, dailyPlayCounts } = data
  const navigate = useNavigate()

  return (
    <li
      className="relative px-[10px] pb-[10px] flex items-center gap-[20px] w-full h-[85px]"
      onClick={() => navigate(`/chart/${id}`)}
    >
      <img
        className="object-cover h-full aspect-square rounded-2xl"
        src={coverImage}
        alt="cover-img"
      />
      <div>
        <strong className="w-[10px] block pb-[5px]">{rank}</strong>
        <div className="pt-[5px]">-</div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="text-lg">{songTitle}</p>
        <strong className="text-md">{artistName}</strong>
        <span className="text-md text-muted-foreground">{agencyName}</span>
      </div>
      <span className="absolute right-[10px] text-md text-muted-foreground font-mono">
        {Object.values(dailyPlayCounts).reduce((sum, count) => sum + count, 0)} ▶️
      </span>
    </li>
  )
}

export default ChartItem
