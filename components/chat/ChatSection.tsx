"use client"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoSend } from "react-icons/io5"
import { BsEmojiSmile } from "react-icons/bs"
import { useState } from "react"
import BackButton from "../ui/BackButton"
import RoundedImage from "../ui/RoundedImage"
import MessageItem from "../menu/MessageItem"

const ChatSection = ({initialMessages=[], userTarget}:{initialMessages?: Message[], userTarget: UserChat}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  return (
   <section className={`w-full flex flex-col bg-white dark:bg-d_semiDark rounded-xl sm:shadow
    sm:static fixed inset-0 z-[1000] sm:z-0`}>
      <div className="flexBetween px-3">
        <div className="basis-[85%] flex items-center gap-2 py-2">
          <BackButton className="block sm:hidden" />
          <RoundedImage
          src={userTarget.profile_picture} 
          alt={userTarget.name}
          className="!min-w-[40px] !w-[40px]"
          />
          <span className="w-[95%] line-clamp-1">{userTarget.name}</span>
        </div>
        <div className="w-9 aspect-square flexCenter rounded-full bg-semiLight dark:bg-d_netral">
          <HiOutlineDotsHorizontal className="text-xl" />
        </div>
      </div>

      <div className="basis-full overflow-auto bg-semiLight dark:bg-d_dark rounded-xl sm:mx-3">
        <div className="flex flex-col gap-4 px-3 pb-2 pt-4">
          {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
          ))}
        </div>  
      </div>

      <div className="flexBetween gap-1 py-2 px-1 sm:px-3">
        <div className='w-full border dark:border-d_netral flexCenter gap-2 rounded-full pr-3 pl-4'>
          <input
          type="text" 
          className='w-full 
          bg-transparent py-2 focus:outline-none dark:text-d_light placeholder:text-semiDark placeholder:dark:text-d_semiLight'
          placeholder='Type something...'
          />
          <div>
            <BsEmojiSmile className="text-[22px] text-blue-400 hover:text-blue-300 cursor-pointer" />
          </div>
        </div>
        <div className="px-2">
          <IoSend className="text-2xl text-blue-500 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>

    </section>

  )
}

const TimeBadge = ({time}:{time:string}) => {
  return (
    <div className="flexCenter mb-1">
      <div className="bg-white dark:bg-d_netral px-3 py-1 rounded-full text-xs">
        Today
      </div>
    </div>  
  )
}

export default ChatSection
