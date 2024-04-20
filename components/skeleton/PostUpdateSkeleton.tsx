import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const PostUpdateSkeleton = () => {
  return (
    <SkeletonTheme>
      <div className="flex gap-3 px-4 pt-3 pb-1">
        < Skeleton circle className='bg-semiLight dark:bg-d_netral w-12 aspect-square' />
        <div className='w-full min-h-[164px]'>
            < Skeleton className='bg-semiLight dark:bg-d_netral w-1/4' />
            < Skeleton className='bg-semiLight dark:bg-d_netral w-full' />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default PostUpdateSkeleton