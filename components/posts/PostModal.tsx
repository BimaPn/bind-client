'use client'
import { PostProps, PostsContextProps } from '@/types/post'
import Modal from '../ui/Modal'
import Post from './Post'
import PostCommentBar from './PostCommentBar'
import { useState,useContext, useEffect } from 'react'
import ApiClient from '@/app/api/axios/ApiClient'
import { postContext } from '../providers/PostContext'
import CommentSkeleton from '../skeleton/CommentSkeleton'
import PostComments from './PostComments'

const PostModal = ({post,show,onClose}:{post:PostProps,show : boolean,onClose : () => void}) => {
  const { setPostComments } = useContext(postContext) as PostsContextProps
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(() => {
    const getPostComments = async () => {
      ApiClient.get(`/api/post/${post.id}/comments`)
      .then((res) => {
        const comments = res.data.comments
        setPostComments(post.id,comments ? comments : [],res.data.commentTotal)
        setLoading(false)
      })
    } 
      getPostComments()
  },[])
  return (
    < Modal 
    show={show}
    title='Post'
    onClose={onClose}
    className='!h-screen'
    >
      <Modal.Body className='h-full'>
        <Post 
        id={post.id}
        caption={post.caption} 
        user={post.user} 
        commentTotal={post.commentTotal} 
        likedTotal={post.likedTotal} 
        created_at={post.created_at} 
        media={post.media}
        hover={false}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        isAuthor={post.isAuthor}/>
      <div>
      </div>

      <div className='min-h-[160px] flex flex-col gap-4 px-2 ss:px-4 pb-4 pt-2'>
        {loading && < CommentSkeleton count={3} /> }
        
        {!loading && (
          < PostComments comments={post.comments} />
          )}
      </div>

      </Modal.Body>
      <Modal.Footer>
        <PostCommentBar postId={post.id as number | string} />
      </Modal.Footer>
    </Modal>
  )
}


export default PostModal