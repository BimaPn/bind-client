import Search from './Search'
import ProfileDropdown from './ProfileDropdown'
import ApplicationLogo from './ApplicationLogo'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'
import ChatIcon from '../icons/ChatIcon'
import NotificationIcon from '../icons/NotificationIcon'
import { CgMenuRight } from 'react-icons/cg'
import { IoIosAddCircleOutline } from 'react-icons/io'
import CreatePostModal from '../posts/CreatePostModal'
import NotificationDropdown from './NotificationDropdown'

const Navbar = async ({className}:{className?:string}) => {
    const session = await getServerSession(authOptions)
  return (
    <nav className={`bg-light dark:bg-d_semiDark flexCenter fixed top-0 right-0 left-0 shadow z-[995] px-4 sm:px-5 ${className}`}>
        <div className='w-[1366px] grid grid-cols-2 md:grid-cols-[1fr_2.5fr_1fr] py-[6px]'>
            {/* logo */}
            <div className='flex py-3'>
            <ApplicationLogo />
            </div>
            {/* search */}
            <div className='hidden md:flex items-center justify-center'>
                <Search className='w-[70%] xl:w-[70%]' />
            </div>
            {/* props */}
            <div className='flex items-center justify-end gap-3'>
                <div className='ss:block hidden'>
                  <NotificationDropdown />
                </div>
                <div className='hidden ss:block'>
                    <ProfileDropdown
                    name={session?.user.name as string} 
                    username={session?.user.username as string}
                    profile_picture={session?.user.profile_picture as string} 
                    className='w-fit sm:w-44'
                    />
                </div>
                <CreatePostModal profilePicture={session?.user.profile_picture as string} className='block ss:hidden'>
                    <IoIosAddCircleOutline className='text-3xl text-dark dark:text-light' />
                </CreatePostModal>
                < CgMenuRight className='text-[26px] text-dark dark:text-light block ss:hidden' />
            </div>
        </div>
    </nav>
  )
}


export default Navbar
