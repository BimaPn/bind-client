"use client"

import { HiOutlineDotsHorizontal } from "react-icons/hi"
import NotificationIcon from "../icons/NotificationIcon"
import Dropdown from "./Dropdown"
import RoundedImage from "./RoundedImage"

const NotificationDropdown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
            <div className='w-9 aspect-square flexCenter bg-semiLight dark:bg-d_netral rounded-full'>
                <NotificationIcon active width={18} className='cursor-pointer'/>
            </div>
        </Dropdown.Trigger>
        <Dropdown.Content className="!fixed md:!absolute right-3 md:right-0 !top-12 md:!top-10 w-[354px] aspect-[3/4.5]">
          <div className="w-full h-full flex flex-col bg-white rounded-xl shadow py-2 pt-3">
            <div className="mb-2 px-3">
              <span className="text-lg font-semibold">Notification</span>
            </div>
            <div className="flex flex-col gap-2 grow overflow-auto px-3">
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
              <NotificationItem />
            </div>
          </div>  
        </Dropdown.Content>
      </Dropdown>

    </>
  )
}


export const NotificationItem = () => {
  return (
    <div className='flexBetween py-[10px] border-b group cursor-pointer'>
      <div className='flex gap-3'>
        <RoundedImage src="/people/andrew_tate.jpg" alt='profile_picture' />
        <div className='flex flex-col'>
          <div className="text-[15px]">
            <span className='font-semibold'>Andrew Tate</span> Liked your post.
          </div>
          <span className='text-gray-500 text-sm'>2 months ago</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-8 aspect-square hidden group-hover:flex items-center justify-center rounded-full bg-semiLight'>
          <HiOutlineDotsHorizontal className='text-xl' />
        </div>
        <div className='w-2 aspect-square rounded-full bg-blue-500' />
      </div>

    </div>
  )
}

export default NotificationDropdown
