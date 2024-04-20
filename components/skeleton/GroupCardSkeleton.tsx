import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const GroupCardSkeleton = ({count=1}:{count ?: number}) => {
  return (
    <SkeletonTheme enableAnimation={false}>
    {
    Array(count).fill(0).map((_,index) => (
      <div key={index} className='flex flex-col rounded-xl gap-2 pb-[6px]'>
          <div className="aspect-[2.35/1] rounded-t-xl overflow-hidden relative">
              < Skeleton className='bg-semiLight dark:bg-d_netral absolute inset-0' />
          </div>
          <div className='w-full flex flex-col'>
            < Skeleton className='bg-semiLight dark:bg-d_netral w-full' />
            < Skeleton className='bg-semiLight dark:bg-d_netral w-1/3' />
          </div>
      </div>
    ))
    }
  </SkeletonTheme>
  )
}

export default GroupCardSkeleton