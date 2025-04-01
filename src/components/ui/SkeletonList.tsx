import { Skeleton } from "./skeleton"

const SkeletonList = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <li
            key={idx}
            className="relative px-[10px] pb-[10px] flex items-center gap-[20px] w-full h-[85px]"
          >
            <Skeleton className="object-cover h-full aspect-square rounded-2xl" />

            <div className="flex flex-col gap-[5px]">
              <Skeleton className="h-[20px] w-[150px]" />
              <Skeleton className="h-[18px] w-[120px]" />
              <Skeleton className="h-[16px] w-[100px]" />
            </div>
          </li>
        ))}
    </>
  )
}

export default SkeletonList
