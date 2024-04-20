'use client'
import { useContext, useState } from "react"
import { PostsContextProps } from "@/types/post"
import { postContext } from "../providers/PostContext"
import ApiClient from "@/app/api/axios/ApiClient"

const PostDelete = ({postId,children,className}:{postId:string | number,children:React.ReactNode,className?:string}) => {
    const { deletePost } = useContext(postContext) as PostsContextProps
    const [disabled,setDisabled] = useState<boolean>(false)
    const buttonClick = (e:React.MouseEvent) => {
        setDisabled(true)
        e.preventDefault()
        ApiClient.delete(`/api/post/${postId}/delete`)
        .then(() => {
            deletePost(postId)
        })
        .catch(() => setDisabled(false))
        alert('success')
    }
  return (
    <button disabled={disabled} onClick={buttonClick} className={className}>
        {children}
    </button>
  )
}

export default PostDelete