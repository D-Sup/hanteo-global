import { useNavigate } from "react-router-dom"

import { EventVoteType } from "../../types"

interface EventVoteItemProps {
  data: EventVoteType
}

const EventVoteItem = ({ data }: EventVoteItemProps) => {
  const { id, eventImage, eventTitle, startAt, endAt } = data
  const navigate = useNavigate()

  return (
    <li
      className="relative w-full px-2 pb-[10px] transition-transform"
      onClick={() => navigate(`/event/${id}`)}
    >
      <div className="flex flex-col h-[185px] w-full overflow-hidden rounded-sm shadow-md">
        <img src={eventImage} alt="event-img" className="w-full h-[115px] object-cover" />
        <div className="pt-[15px] px-[10px] w-full h-[70px]">
          <div className="flex justify-between">
            <p className="text-md font-bold truncate w-[300px]">{eventTitle}</p>
            <button className="w-[110px] px-[20px] py-[2px] mt-[-3px] text-sm font-bold text-accent border border-2 border-accent rounded-lg">
              투표하기
            </button>
          </div>
          <span className="mt-[10px] block text-right text-sm">
            {startAt.split("T").join(" ")} ~ {endAt.split("T").join(" ")}
          </span>
        </div>
      </div>
      {new Date(endAt) > new Date() ? (
        <div className="z-10 absolute top-2 left-4 inline px-[5px] py-[5px] rounded-md bg-accent text-sm text-[#FFF] font-bold">
          진행 중
        </div>
      ) : (
        <div className="z-10 absolute top-2 left-4 inline px-[5px] py-[5px] rounded-md bg-muted text-sm text-[#000] font-bold">
          마감
        </div>
      )}
    </li>
  )
}

export default EventVoteItem
