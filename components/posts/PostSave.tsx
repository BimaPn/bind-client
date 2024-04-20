'use client'
import { useState,useContext } from 'react'
import { postContext } from '../providers/PostContext'
import { PostsContextProps } from '@/types/post'
import ApiClient from '@/app/api/axios/ApiClient'
import { BiSolidBookmark } from 'react-icons/bi'

const PostSave = ({postId,isSaved}:{postId:string | number,isSaved:boolean}) => {
    const { updatePostSave } = useContext(postContext) as PostsContextProps
    const [disabled,setDisabled] = useState<boolean>(false)
    const postSave = (e:React.MouseEvent) => {
      e.stopPropagation()
      setDisabled(true)
      let url;
        if(isSaved) {
          url = `/api/post/${postId}/unsave`
        }else {
          url = `/api/post/${postId}/save`
        }
        ApiClient.post(url)
        .then(() => {
          updatePostSave(postId,isSaved);
          setDisabled(false)
        })
    }
  return (
    <button disabled={disabled} onClick={postSave}>
        < BiSolidBookmark className={`text-[21px] ss:text-[23px] 
        ${isSaved ? 'fill-semiDark stroke-semiDark' : 'stroke-dark dark:stroke-light fill-none'}`}
        strokeWidth={1.8} />
    </button>
  )
}

export default PostSave