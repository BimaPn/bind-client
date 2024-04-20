'use client'
import { BiSolidBookmark } from "react-icons/bi"
import ExploreIcon from "../icons/ExploreIcon"
import { GoHomeFill } from "react-icons/go"
import { usePathname } from "next/navigation"
import Link from "next/link"
import UserIcon from "../icons/UserIcon"
import GroupIcon from "../icons/GroupIcon"
import ChatIcon from "../icons/ChatIcon"
import NotificationIcon from "../icons/NotificationIcon"

const Navigation = ({username,className}:{username :string,className?:string}) => {
    const pathname = usePathname()
  return (
        <div className={`flex text-dark dark:text-d_light ${className}`}>

            <Link 
            href={`/`}
            className={`flex items-center gap-3 py-2 px-2
            ${pathname === '/' && 'font-medium'} hover:bg-semiLight dark:hover:bg-d_netral rounded-xl cursor-pointer`}>
            <div className="w-8 flexCenter">
            <GoHomeFill 
            className={`${pathname === '/' ? 'fill-dark dark:fill-light stroke-none' : 'fill-none stroke-dark dark:stroke-light'}`} 
            strokeWidth={1.5} style={{ fontSize : 29 }} />
            </div>
            <span className="hidden lg:block">
                Home
            </span>
            </Link>

            <Link 
            href={'/explore'}
            className={`flex items-center gap-3 py-2 px-2 hover:bg-semiLight dark:hover:bg-d_netral rounded-lg cursor-pointer ${pathname.includes('/explore') && 'font-medium'}`}>
            <div className="w-8 flexCenter">
            < ExploreIcon 
            active={pathname.includes('/explore') ? true : false}
            width={26} />
            </div>
            <span className="hidden lg:block">
                Explore
            </span>
            </Link>

            <Link href={`/notification`} className='ss:hidden flex items-center gap-1 py-2 px-2 rounded-lg cursor-pointer'>
            <div className="w-8 flexCenter">
                < NotificationIcon width={22}/>
            </div>
            </Link>

            <Link href={`/chat`} className='ss:hidden flex items-center gap-1 py-2 px-2 rounded-lg cursor-pointer'>
            <div className="w-8 flexCenter">
                < ChatIcon width={25}/>
            </div>
            </Link>

            <Link
            href={`/groups`}
            className={`flex items-center gap-3 py-2 px-2 
            hover:bg-semiLight dark:hover:bg-d_netral rounded-lg cursor-pointer ${pathname.includes('/groups') && 'font-medium'}`}>
            <div className="w-8 flexCenter">
            < GroupIcon 
            active={pathname.includes('/groups') ? true : false}
            width={22} />
            </div>
            <span className="hidden lg:block">
                Group
            </span>
            </Link>
            
            <Link 
            href={`/saved`}
            className={`hidden ss:flex items-center gap-3 py-2 px-2 
            hover:bg-semiLight dark:hover:bg-d_netral rounded-lg cursor-pointer ${pathname.includes('/saved')}`}>
            <div className="w-8 flexCenter">
            < BiSolidBookmark  className={`stroke-dark dark:stroke-light ${pathname.includes('/saved') ? 'fill-dark dark:fill-light' : 'fill-none'} text-[23px]`} strokeWidth={1.7}  />
            </div>
            <span className="hidden lg:block">
                Saved
            </span>
            </Link>

            <Link
            href={`/${username}`}
            className={`hidden ss:flex items-center gap-3 py-2 px-2
             hover:bg-semiLight dark:hover:bg-d_netral rounded-lg cursor-pointer ${pathname === `/${username}` && 'font-medium'}`}>
            <div className="w-8 flexCenter">
            < UserIcon active={pathname === `/${username}`} width={18.5} className={`stroke-dark fill-none`} />
            </div>
            <span className="hidden lg:block">
                Profile
            </span>
            </Link>

        </div>

  )
}

export default Navigation