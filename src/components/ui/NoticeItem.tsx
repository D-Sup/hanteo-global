import { useNavigate } from "react-router-dom"

import { NoticeType } from "../../types"

interface NoticeItem {
  data: NoticeType
}

const NoticeItem = ({ data }: NoticeItem) => {
  const { id, noticeImage, noticeTitle } = data
  const navigate = useNavigate()
  return (
    <li
      className="relative h-[185px] w-full overflow-hidden rounded-sm shadow-md"
      onClick={() => navigate(`/notice/${id}`)}
    >
      <img src={noticeImage} alt="notice-img" className="w-full h-auto object-cover" />
      <span className="absolute top-[10px] left-[10px] bg-[#000] px-[10px] py-[5px] text-md text-[#FFF] rounded-md">
        {noticeTitle}
      </span>
    </li>
  )
}

export default NoticeItem
