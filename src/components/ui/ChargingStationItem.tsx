const ChargingStationItem = () => {
  return (
    <li className="relative w-full px-2 pb-[10px] transition-transform">
      <div className="flex flex-col h-[150px] w-full overflow-hidden rounded-sm shadow-md">
        <img
          src="https://picsum.photos/600/400"
          alt="chargingStation-img"
          className="w-full h-[90px] object-cover"
        />
        <div className="pt-[15px] px-[10px] w-full h-[60px]">
          <div className="flex justify-between">
            <p className="text-md font-bold truncate w-[300px]">
              미션에 참여하고 빠르게 크레딧을 충전해 보세요!
            </p>
          </div>
        </div>
      </div>
      <div className="z-10 absolute top-2 left-4 px-[8px] py-[3px] rounded-full outline outline-2 outline-white text-sm text-[#FFF] font-bold">
        10 크레딧
      </div>
    </li>
  )
}

export default ChargingStationItem
