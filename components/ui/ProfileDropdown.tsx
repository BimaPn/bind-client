'use client'
import { MdArrowForwardIos } from "react-icons/md"
import RoundedImage from "./RoundedImage"
import Dropdown from "./Dropdown"
import { IoMdSettings } from 'react-icons/io'
import { IoLogOut } from "react-icons/io5"
import Link from "next/link"
import LogoutButton from "./LogoutButton"
import ThemeSwitch from "./ThemeSwicth"

const ProfileDropdown = ({name,username,profile_picture,className} : {name:string,username:string,profile_picture:string,className ?: string}) => {
  return  (
    <Dropdown>
      <Dropdown.Trigger>
        <div className={`flexBetween gap-3 hover:bg-semiLight dark:hover:bg-d_netral dark:text-d_light ${className} px-2 rounded-lg cursor-pointer py-1`}>
            < RoundedImage
            src={profile_picture}
            alt="profile picture"
            className="w-[72px]" /> 
            <span className="font-medium text-sm w-full truncate">{name}</span>
            < MdArrowForwardIos className="text-xl rotate-90" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="right-0 w-64 text-dark dark:text-d_light">
        <div className="bg-light dark:bg-d_semiDark flex flex-col shadow rounded-lg py-2 px-3">
          <Link href={`/${username}`} className="flex items-center gap-3 py-2 px-1 hover:bg-light dark:hover:bg-d_netral rounded-xl">
            <RoundedImage
            src={profile_picture}
            className="w-9"
            alt="profile picture"/>
            <span className="font-medium">Profile</span>
          </Link>
          <ThemeSwitch className="flex items-center gap-3 py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-xl">
            <div className="w-9 flexCenter aspect-square rounded-full bg-semiLight dark:bg-d_netral">
              < IoMdSettings className="text-2xl" />
            </div>
            <span className="font-medium">Settings & Privacy</span>
          </ThemeSwitch>
          
          <LogoutButton className="flex items-center gap-3 py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-xl">
            <div className="w-9 flexCenter aspect-square rounded-full bg-semiLight dark:bg-d_netral">
              < IoLogOut className="text-2xl" />
            </div>
            <span className="font-medium">
              Logout
            </span>
          </LogoutButton>
        </div>
      </Dropdown.Content>
    </Dropdown>
  )
}

export default ProfileDropdown