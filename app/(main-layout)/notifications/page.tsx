import PageHeader from '@/components/ui/PageHeader'
import RoundedImage from '@/components/ui/RoundedImage'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const page = () => {
  return (
    <section className="bg-light dark:bg-d_semiDark rounded-xl sm:shadow h-[90vh] ss:h-fit">
        <PageHeader title="Notifications" className="block ss:hidden" />
        <div className="flex flex-col gap-3 px-2 ss:px-4 pb-4">
          <NotificationItem /> 
          <NotificationItem /> 
        </div>
    </section>
  )
}

const NotificationItem = () => {
  return (
    <div className='flexBetween py-[10px] border-b group cursor-pointer'>
      <div className='flex gap-3'>
        <RoundedImage src="/people/andrew_tate.jpg" alt='profile_picture' />
        <div className='flex flex-col'>
          <div>
            <span className='font-semibold'>Andrew Tate</span> Liked your post.
          </div>
          <span className='text-gray-500 text-sm'>2 months ago</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-2 aspect-square rounded-full bg-blue-500' />
        <div className='w-8 aspect-square hidden group-hover:flex items-center justify-center rounded-full bg-semiLight'>
          <HiOutlineDotsHorizontal className='text-xl' />
        </div>
      </div>

    </div>
  )
}

export default page
