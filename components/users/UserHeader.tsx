'use client'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { VscVerifiedFilled } from "react-icons/vsc"
import Image from "next/image"
import EditProfile from "./EditProfile"
import { useContext } from "react"
import { userProfileContext } from "../providers/UserProfileContext"
import { UserProfileContextProps} from "@/types/user"
import FollowUserBtn from "./FollowUserBtn"

const UserHeader = ({authUsername} : {authUsername : string}) => {
    const {user,toggleIsFollow} = useContext(userProfileContext) as UserProfileContextProps
  return (
    <> 
    {user && (
    <div className="bg-light dark:bg-d_semiDark ss:rounded-t-xl h-fit ss:overflow-hidden border border-transparent">        
        <div className="relative h-fit">
            <div className="relative w-full aspect-[3/1] overflow-hidden">
                <Image src={user.cover_photo}
                fill
                objectFit="cover"
                alt="cover" />
            </div>
            <div className="w-32 md:w-36 aspect-square rounded-full overflow-hidden absolute -bottom-14 ss:-bottom-[72px] left-3 border-4 border-light dark:border-d_semiDark">
                <Image src={user.profile_picture}
                fill
                style={{objectFit:"cover"}}
                alt="profile picture"/>
            </div>
        </div>

        <div className="mt-12 ss:mt-0 px-4 text-dark dark:text-d_light">
            <div className="pl-0 ss:pl-[150px] ss:mb-6 flex flex-col pt-2">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-[22px] ss:text-xl">{user.name}</span>
                    {user.isVerified && (
                    < VscVerifiedFilled className='text-blue-500 text-lg-xl' />
                    )}
                </div>
                <span className="text-semiDark dark:text-d_semiLight text-sm">@{user.username}</span>
            </div>

            <p className="break-all my-2">{user.bio}</p>

            <div className="mb-3 flex ss:items-center flex-col ss:flex-row ss:justify-between gap-2">
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{user.followingTotal}</span>
                        <span className="text-semiDark dark:text-d_semiLight">Followings</span>
                    </div>
                    ·
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{user.followerTotal}</span>
                        <span className="text-semiDark dark:text-d_semiLight">Followers</span>
                    </div>
                    ·
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{user.postTotal}</span>
                        <span className="text-semiDark dark:text-d_semiLight">Posts</span>
                    </div>
                </div>
                <div className="flex flex-row ss:flex-row-reverse items-center gap-[6px]">
                    {user.username == authUsername ? (
                        < EditProfile
                        username={user.username}
                        profile_picture={user.profile_picture}
                        cover_photo={user.cover_photo}
                        name={user.name}
                        bio={user.bio}
                        className="!w-full ss:!w-fit" />
                    ) : 
                    (
                        <>
                        < FollowUserBtn 
                        isFollow={user.isFollow} 
                        usernameTarget={user.username} 
                        onFinished={() => toggleIsFollow()}
                        className="!py-2 !w-full ss:!w-fit" />
                        <Link href={`/chat`} className="flexCenter font-medium bg-light px-6 py-2 rounded-full">
                            Chat
                        </Link>     
                        </>
                    )}
                    <button className="flexCenter bg-semiLight dark:bg-d_netral text-dark dark:text-light px-[10px] aspect-square rounded-full">
                        < BsThreeDots className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default UserHeader