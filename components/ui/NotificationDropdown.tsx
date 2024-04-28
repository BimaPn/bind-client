"use client"

import { HiOutlineDotsHorizontal } from "react-icons/hi"
import NotificationIcon from "../icons/NotificationIcon"
import Dropdown, { dropDownContext } from "./Dropdown"
import RoundedImage from "./RoundedImage"
import { useNotification } from "../providers/NotificationProvider"
import { useContext, useEffect } from "react"
import { DropdownProps } from "@/types/types.dropdown"
import ApiClient from "@/app/api/axios/ApiClient"
import { formatDate } from "@/helpers/time"

const NotificationDropdown = () => {
  const { unreadCount } = useNotification()
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
            <div className='w-9 aspect-square flexCenter bg-semiLight dark:bg-d_netral rounded-full'>
              <div className="relative">
                {unreadCount > 0 && (
                  <div className={`${unreadCount <= 10 ? "w-[15px] text-[10px]":"w-4 text-[9px]"} absolute -top-[10px] -right-[10px] 
                  flexCenter aspect-square rounded-full bg-red-500 font-bold text-white`}
                  >
                    {(unreadCount <= 10) && unreadCount}
                    {(unreadCount > 10) && `${unreadCount}+`}
                  </div>
                )}
                <NotificationIcon active width={18} className='cursor-pointer'/>

              </div>

            </div>
        </Dropdown.Trigger>
        <Dropdown.Content className="!fixed md:!absolute right-3 md:right-0 !top-12 md:!top-10 w-[354px] aspect-[3/4.5]">
          <Content />
        </Dropdown.Content>
      </Dropdown>

    </>
  )
}

const Content = () => {
  const { notifications, setNotifications } = useNotification()
  useEffect(() => {
    if(!notifications) {
      ApiClient.get(`/api/notifications/get`)
      .then((res) => {
        console.log(res.data)
        setNotifications(res.data.notifications)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  },[])
  return notifications && (
    <div className="w-full h-full flex flex-col bg-white rounded-xl shadow py-2 pt-3">
      <div className="mb-1 px-4">
        <span className="text-lg font-semibold">Notification</span>
      </div>
      <div className="flex flex-col gap-1 grow overflow-auto px-4">
        {notifications.map((notif, index) => (
          <NotificationItem key={index} notification={notif} />
        ))}
      </div>
    </div>  
  )
}


export const NotificationItem = ({notification}:{notification: NotificationItem}) => {
  return (
    <div className='flexBetween py-[10px] border-b group cursor-pointer'>
      <div className='flex gap-3'>
        <RoundedImage src={notification.sender.profile_picture} alt='profile_picture' />
        <div className='flex flex-col'>
          <div className="text-[15px]">
            <span className='font-semibold'>{notification.sender.name}</span> {notification.message} 
          </div>
          <span className='text-gray-500 text-sm'>{formatDate(notification.created_at)}</span>
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
