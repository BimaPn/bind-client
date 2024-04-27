import { NotificationItem } from '@/components/ui/NotificationDropdown';
import PageHeader from '@/components/ui/PageHeader'
import RoundedImage from '@/components/ui/RoundedImage'
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const page = () => {
  return (
    <section className="bg-light dark:bg-d_semiDark rounded-xl sm:shadow h-[90vh] ss:h-fit">
        <PageHeader title="Notifications" className="block ss:hidden" />
        <div className="flex flex-col gap-2 px-2 ss:px-4 pb-4">
          <NotificationItem /> 
          <NotificationItem /> 
        </div>
    </section>
  )
}


export default page
