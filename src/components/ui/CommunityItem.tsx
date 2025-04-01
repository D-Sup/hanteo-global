import { useNavigate } from "react-router-dom"

import convertToRelativeDate from "../utils/convertToRelativeDate"

import { CommunityType } from "../../types"

interface CommunityItemProps {
  data: CommunityType
  rank: number
}

const CommunityItem = ({ data, rank }: CommunityItemProps) => {
  const { id, communityImage, communityName, communityDescription, subscriberIds, lastMessageAt } =
    data
  const navigate = useNavigate()

  return (
    <li
      className="px-[10px] pb-[10px] flex items-center gap-[10px] w-full h-[85px]"
      onClick={() => navigate(`/community/${id}`)}
    >
      <strong className="pl-[10px] text-lg">{rank}</strong>
      <img
        className="object-cover h-full p-[5px] aspect-square rounded-full"
        src={communityImage}
        alt="community-img"
      />
      <div className="flex flex-col gap-[5px]">
        <strong className="text-lg">{communityName}</strong>
        <span className="text-md truncate w-[250px]">{communityDescription}</span>
        <div>
          <p className="inline text-sm font-bold">{subscriberIds.length}명</p>
          <span className="pl-[5px] text-sm">{convertToRelativeDate(lastMessageAt)}</span>
        </div>
      </div>
    </li>
  )
}

export default CommunityItem
