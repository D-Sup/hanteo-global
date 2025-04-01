import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full flex-center flex-col gap-[20px]">
      <div>페이지를 찾을 수 없습니다</div>
      <button
        className="px-[10px] py-[10px] border border-2 border-accent rounded-full"
        onClick={() => navigate("/main")}
      >
        홈으로 이동하기
      </button>
    </div>
  )
}

export default NotFoundPage
