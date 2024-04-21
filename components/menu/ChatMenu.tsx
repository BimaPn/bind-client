"use client"
import { usePathname } from "next/navigation"
import RoundedImage from "../ui/RoundedImage"
import ChatIcon from "../icons/ChatIcon"

const ChatMenu = () => {
  const path = usePathname()
  return (
    <div className={`w-full md:w-[512px] flex flex-col bg-white rounded-xl sm:shadow ${path !== "/chat" && "hidden md:block"} py-4`}>
      <div className="mb-3 text-dark -mt-1 px-4">
        <div className="flex items-center pb-2 gap-[6px] border-b">
          <ChatIcon active width={21} className="-mb-[2px]"/>
          <span className="font-semibold text-xl">Chat</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full max-h-full overflow-auto px-4 -mt-1">
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  )
}

const ChatItem = () => {
  return (
    <div className="w-full flexBetween gap-2 py-2">
      <RoundedImage src="/people/person1.jpg" alt="person" className="min-w-[42px]" />
      <div className="w-[95%] flex flex-col items-center overflow-hidden">
        <div className="w-full flexBetween">
          <span>Joey Muter</span>
          <span className="text-xs text-gray-600">13.30 PM</span>
        </div>
        <div className="w-full flexBetween">
          <span className="w-[80%] text-[15px] text-gray-600 line-clamp-1">
          hi bro, do want to go gym today ? Im free today btw
          </span>
        </div>
      </div>

    </div>
  )
}

export default ChatMenu
