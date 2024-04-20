import { PostCommentProps } from '@/types/post'
import React from 'react'
import PostComment from './PostComment'

const PostComments = ({comments}:{comments?:PostCommentProps[]}) => {
  return comments?.length != 0 ? (
      <>      
      {comments?.map((item) => (
        <PostComment
        key={item.id}
        id={item.id}
        user={item.user}
        comment={item.comment}
        created_at={item.created_at}/>
      ))}
      </>
    ) : 
    (
      <div>
        no comment yet
      </div>
    )
}

export default PostComments