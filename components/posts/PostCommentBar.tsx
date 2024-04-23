'use client'
import Image from "next/image"
import TextArea from "../ui/TextArea"
import { IoSend } from "react-icons/io5"
import { useContext, useState, useEffect } from "react"
import { postContext } from "../providers/PostContext"
import ApiClient from "@/app/api/axios/ApiClient"
import { PostsContextProps } from "@/types/post"

const PostCommentBar = ({postId} : {postId : string | number}) => {
    const { addPostComment } = useContext(postContext) as PostsContextProps
    const [comment,setComment] = useState<string>('')
    const [disabled,setDisabled] = useState<boolean>(false)

    useEffect(() => {
      comment.length == 0 ? setDisabled(true) : setDisabled(false)
    },[comment])
    const formSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setDisabled(true)
        ApiClient.post(`/api/post/${postId}/comment`,
        {
          comment,
        })
        .then((res) => {
          addPostComment(postId,res.data.commentId,res.data.comment)
          setComment('')
          setDisabled(false)
        })
    }
  return (
    <form onSubmit={formSubmit} className='h-fit flexBetween px-4 py-[6px] ss:py-[10px] gap-4'>
    <div className='w-full flex items-center gap-2'>
      <div className='w-11 aspect-square rounded-full overflow-hidden'>
        <Image src={`/person.jpg`}
        width={300} height={300}
        className='w-full'
        alt='profile picture'/>
      </div>
      <TextArea
      value={comment}
      rows={1}
      onChange={(e) => setComment(e.target.value)}
      className='w-full bg-semiLight dark:bg-d_netral px-3 py-[10px] border-0 rounded-xl focus:outline-none dark:placeholder:text-d_semiLight'
      placeholder='Write a comment...'
      />
    </div>
    <button disabled={disabled} className="disabled:opacity-40 disabled:cursor-not-allowed">
        < IoSend className='text-2xl text-semiDark dark:text-light' />
    </button>
  </form>
  )
}

export default PostCommentBar
