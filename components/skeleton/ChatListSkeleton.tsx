import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const ChatListSkeleton = ({count=1}:{count?:number}) => {
  return (
    <SkeletonTheme enableAnimation={false}>
      {
      Array(count).fill(0).map((_,index) => (
      <div key={index} className="w-full flex items-center gap-2 p-2">
        <Skeleton circle className='bg-semiLight dark:bg-d_netral min-w-[44px] aspect-square' />
        <div className="w-full mt-[2px]">
          <Skeleton className='bg-semiLight dark:bg-d_netral w-[80%] h-[14px] -mb-[2px]' />
          <Skeleton className='bg-semiLight dark:bg-d_netral w-[30%] h-[14px]' />
        </div>
      </div>
      ))
      }
    </SkeletonTheme>
  )
}

export default ChatListSkeleton
