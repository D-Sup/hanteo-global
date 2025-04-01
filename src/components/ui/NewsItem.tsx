import { useNavigate } from "react-router-dom"

import { NewsType } from "../../types"

interface NewsItemProps {
  data: NewsType
}

const NewsItem = ({ data }: NewsItemProps) => {
  const { id, newsImage, newsTitle, newsContent } = data
  const navigate = useNavigate()

  return (
    <li className="flex h-[126px] pb-[5px]" onClick={() => navigate(`/news/${id}`)}>
      <img src={newsImage} alt="news-img" className="object-cover" />
      <div className="p-[10px] flex flex-col justify-center gap-[5px]">
        <p className="text-lg font-bold">{newsTitle}</p>
        <span className="block mt-[5px] text-md truncate w-[200px] text-muted-foreground">
          {newsContent}
        </span>
      </div>
    </li>
  )
}

export default NewsItem
