'use client'
import { GoComment } from "react-icons/go"
import { PiShareFatLight } from "react-icons/pi"
import { VscVerifiedFilled } from "react-icons/vsc"
import { PostProps } from "@/types/post"
import RoundedImage from "../ui/RoundedImage"
import Link from "next/link"
import PostLike from "./PostLike"
import PostMedia from "./PostMedia"
import PostOptionDropdown from "./PostOptionDropdown"
import PostSave from "./PostSave"
import PostEditContext from "../providers/PostEditContext"

const Post = ({id,user,caption,media,isLiked,isSaved,isAuthor,likedTotal,commentTotal,created_at,hover=true}
:PostProps & {hover?:boolean}) => {
  return (
    <PostEditContext>
    <div className={`w-full bg-light dark:bg-d_semiDark px-2 ss:px-4 pt-3 pb-[6px] sm:pt-[12px] sm:pb-[10px] rounded-none ss:rounded-xl ${hover && 'hover:bg-slate-50'}`}>
        < Header id={id} isAuthor={isAuthor} user={user} created_at={created_at} />
        <div className="flex flex-col gap-2 pt-2 pb-[10px]">
            {caption && (
                <p>
                    {caption}
                </p>
            )}
            {media?.length != 0 && (
                < PostMedia media={media!} />
            )}
        </div>
        < Footer id={id} isLiked={isLiked} isSaved={isSaved} likedTotal={likedTotal} commentTotal={commentTotal} />
    </div>
    </PostEditContext>
  )
}

const Header = ({id,isAuthor,user,created_at}:Pick<PostProps,"user" | "created_at" | 'id' | 'isAuthor'>) => {
    return (
        <div                className="flexBetween">
            <div className="flex items-center gap-2">
                {user.profile_picture && (
                    <Link href={`/${user.username}`} onClick={(e) => e.stopPropagation()}>
                        < RoundedImage
                        src={user.profile_picture}
                        className="!w-11"
                        alt="profile picture" />    
                    </Link>
                )}
                <div className="flex flex-col text-dark gap-[2px]">

                    <div className="leading-4 flex items-center gap-1">
                        <Link href={`/${user.username}`} onClick={(e) => e.stopPropagation()}>
                            <span className="font-medium text-dark dark:text-d_light hover:underline">
                                {user.name}
                            </span>
                        </Link>
                        {user.isVerified && (
                        < VscVerifiedFilled className='text-blue-500 text-lg' />
                        )}
                    </div>
                    <div className="leading-3">
                        <span className="text-sm text-semiDark dark:text-d_semiLight">{created_at}</span>
                    </div>

                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
                < PostOptionDropdown postId={id} isAuthor={isAuthor} />
            </div>
        </div>
    )
}

const Footer = ({id,likedTotal,commentTotal,isLiked,isSaved}:Pick<PostProps,'id' | 'likedTotal' | 'commentTotal'> & {isLiked:boolean,isSaved:boolean}) => {
    return (
        <div className="flexBetween text-dark dark:text-light">
            <div className="flex items-center gap-4">
                <div className="flexCenter gap-1 ss:gap-[6px]">
                    < PostLike postId={id} isLiked={isLiked} />
                    <span>{likedTotal != 0 ? likedTotal : ''}</span>
                </div>
                <div className="flexCenter gap-[6px]">
                    < GoComment strokeWidth={.2} className="text-[22px] ss:text-[24px]" />
                    <span>{commentTotal != 0 ? commentTotal : ''}</span>
                </div>
                < PiShareFatLight strokeWidth={5} className="text-[23px] ss:text-[25px]" />
            </div>
            <div className="flexCenter">
                < PostSave postId={id} isSaved={isSaved} />
            </div>
        </div>
    )
}

export default Post