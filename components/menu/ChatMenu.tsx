"use client"
import { usePathname } from "next/navigation"
import RoundedImage from "../ui/RoundedImage"
import ChatIcon from "../icons/ChatIcon"
import Link from "next/link"

const ChatMenu = () => {
  const path = usePathname()
  return (
    <div className={`w-full md:w-[512px] flex flex-col bg-white dark:bg-d_semiDark rounded-xl sm:shadow ${path !== "/chat" && "hidden md:block"} py-4`}>
      <div className="mb-3 text-dark -mt-1 px-4">
        <div className="flex items-center pb-3 gap-2 border-b dark:border-d_netral">
          <ChatIcon active width={21} className="-mb-[2px]"/>
          <span className="font-semibold text-xl dark:text-white">Chat</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:h-full sm:max-h-full sm:overflow-auto px-2 -mt-1">
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

const ChatItem = () => {
  return (
    <Link href={`/chat/damn`} className="w-full flexBetween gap-2 p-2 cursor-pointer hover:bg-semiLight dark:hover:bg-d_netral rounded-lg">
      <RoundedImage src="/people/person1.jpg" alt="person" className="min-w-[42px]" />
      <div className="w-[95%] flex flex-col items-center overflow-hidden">
        <div className="w-full flexBetween">
          <span>Joey Muter</span>
          <span className="text-xs text-gray-600 dark:text-d_semiLight">13.30 PM</span>
        </div>
        <div className="w-full flexBetween">
          <span className="w-[90%] text-[15px] text-gray-600 dark:text-d_semiLight line-clamp-1">
          hi bro, do want to go gym today ? Im free today btw
          </span>
        </div>
      </div>

    </Link>
  )
}

export default ChatMenu
