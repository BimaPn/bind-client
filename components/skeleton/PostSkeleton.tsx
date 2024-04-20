import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'

const PostSkeleton = ({count = 1}:{count ?: number}) => {
  return (
    <SkeletonTheme enableAnimation={false}>
      {
      Array(count).fill(0).map((_,index) => (
        <div key={index} className={`w-full bg-light dark:bg-d_semiDark rounded-none ss:rounded-xl ss:shadow px-2 ss:px-4 py-[14px] overflow-hidden `}>
            <div className="flex items-center gap-2">
                < Skeleton circle width={44} className='bg-semiLight dark:bg-d_netral aspect-square' />
                <div className="w-1/3 sm:w-[20%] flex flex-col text-dark gap-[2px]">
                    < Skeleton count={2} className='bg-semiLight dark:bg-d_netral' />
                </div>
            </div>

            <div className='aspect-video rounded-2xl overflow-hidden pt-2 pb-2 sm:pb-4'>
                < Skeleton className='bg-semiLight dark:bg-d_netral w-full h-full' />
            </div>
        </div>
      ))
      }
    </SkeletonTheme>
  )
}


export default PostSkeleton