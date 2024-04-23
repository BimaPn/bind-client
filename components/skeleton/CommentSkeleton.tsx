import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'

const CommentSkeleton = ({count = 1}:{count ?:number}) => {
  return (
    <SkeletonTheme enableAnimation={false}>
      {
      Array(count).fill(0).map((_,index) => (
        <div key={index} className="flex gap-3">
          < Skeleton circle className='bg-semiLight dark:bg-d_netral w-11 aspect-square' />
          <div className="w-full flex flex-col gap-[2px]" >
            < Skeleton className='bg-semiLight dark:bg-d_netral w-[40%]' />
            < Skeleton className='bg-semiLight dark:bg-d_netral w-full py-6 mb-3' />
          </div>
        </div>
      ))
      }
    </SkeletonTheme>
  )
}

export default CommentSkeleton
