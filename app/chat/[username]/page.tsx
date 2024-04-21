import RoundedImage from "@/components/ui/RoundedImage"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoSend } from "react-icons/io5"
import { BsEmojiSmile } from "react-icons/bs"
import BackButton from "@/components/ui/BackButton"

const page = () => {
  return (
    <section className={`w-full flex flex-col bg-white dark:bg-d_semiDark rounded-xl sm:shadow
    sm:static fixed inset-0 z-[1000] sm:z-0`}>
      <div className="flexBetween px-3">
        <div className="basis-[85%] flex items-center gap-2 py-2">
          <BackButton className="block sm:hidden" />
          <RoundedImage
          src="/people/cristiano_ronaldo.jpg" 
          alt="cristiano"
          className="!min-w-[40px] !w-[40px]"
          />
          <span className="w-[95%] line-clamp-1">Cristiano Ronaldo</span>
        </div>
        <div className="w-9 aspect-square flexCenter rounded-full bg-semiLight dark:bg-d_netral">
          <HiOutlineDotsHorizontal className="text-xl" />
        </div>
      </div>

      <div className="basis-full overflow-auto bg-semiLight dark:bg-d_dark rounded-xl sm:mx-3">
        <div className="flex flex-col gap-4 px-3 sm:px-2 pb-2 pt-4">
          <div className="flexCenter mb-1">
            <div className="bg-white dark:bg-d_netral px-3 py-1 rounded-full text-xs">
              Today
            </div>
          </div>  
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
          <MessageItem isCurrentUser />
          <MessageItem isCurrentUser={false} />
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

const MessageItem = ({isCurrentUser}:{isCurrentUser:boolean}) => {
  return (
    <div className={`w-full flex items-center ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[90%] flex flex-col ${isCurrentUser ? "items-start" : "items-end"}`}>
        <div className={`w-full p-2 rounded-xl break-all
        ${isCurrentUser ? "bg-blue-500 rounded-tr-none text-white" : "bg-white dark:bg-d_netral dark:text-white text-dark rounded-tl-none"}`}
        >
          hei bro jir haha dsadnjkasdjkashdkahsdkhgsadhasdghasgdjhsagdhjsagdjsagdjhsagdjhsagdjhas
        </div>
        <div>
          <span className="text-xs text-gray-600 dark:text-d_semiLight">12.00 PM</span>
        </div>
      </div>

    </div>
  )
}

export default page
