
'use client'
import { useContext, useState } from 'react'
import { PiHeartFill } from 'react-icons/pi'
import { postContext } from '../providers/PostContext'
import { PostsContextProps } from '@/types/post'
import ApiClient from '@/app/api/axios/ApiClient'

const PostLike = ({postId,isLiked} : {postId : string | number,isLiked : boolean}) => {
  const { updatePostLikes } = useContext(postContext) as PostsContextProps
  const [disabled,setDisabled] = useState<boolean>(false)
  const postLike = (e:React.MouseEvent) => {
    e.stopPropagation()
    setDisabled(true)
    let url;
      if(isLiked) {
        url = `/api/post/${postId}/unlike`
      }else {
        url = `/api/post/${postId}/like`
      }
      ApiClient.post(url)
      .then(() => {
        updatePostLikes(postId,isLiked);
        setDisabled(false)
      })
  }
  return (
    <button disabled={disabled} onClick={postLike}>
        < PiHeartFill className={`text-[23px] ss:text-[25px] stroke-[20px]
        ${isLiked ? 'stroke-red-600 fill-red-600' : 'stroke-dark dark:stroke-light fill-none '}`} />
    </button>
  )
}

export default PostLike