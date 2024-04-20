import users from "@/constants/suggestionUsers"
import { UserItemProps } from "@/types/types"
import Link from "next/link"
import { VscVerifiedFilled } from "react-icons/vsc"
import RoundedImage from "./RoundedImage"
import FollowUserBtn from "../users/FollowUserBtn"

const SuggestionUsers = () => {
  return (
    <div className="bg-light dark:bg-d_semiDark text-dark dark:text-light rounded-xl sm:shadow px-4 py-4">
      <div className="flexBetween">
        <h4 className="font-medium text-lg">Suggestion for you</h4>
      </div>
        <ul className="flex flex-col gap-[18px] mt-4 mb-4">
          {users.map((user) => (
            < UserItem 
            key={user.name}
            name={user.name}
            username={user.username}
            image={user.image}
            verified={user.verified} />
            ))}
        </ul>
        <Link 
        href={`users/discover`} 
        className="text-blue-600 dark:text-blue-500">
        Show more 
        </Link> 

    </div>
  )
}

const UserItem = ({name,username,image,verified}:UserItemProps) => {
  return (
    <li className="flexBetween text-dark dark:text-light">
      <div className="flex items-center gap-2">
        < RoundedImage
        src={image}
        alt="profile picture"
        className="!w-10" />
        <div className="flex flex-col gap-[2px]">
          <div className="leading-4 flex items-center gap-1">
            <span className="font-medium truncate">{name}</span>
            {verified && (
               < VscVerifiedFilled className='text-blue-500' />
            )}
          </div>
          <div className="leading-3">
            <span className="text-sm text-semiDark dark:text-d_semiLight">@{username}</span>
          </div>
        </div>
      </div>

      < FollowUserBtn 
      isFollow={false} 
      usernameTarget="anjay"
      className="!py-[6px] !px-4" />
    </li>
  )
}



export default SuggestionUsers