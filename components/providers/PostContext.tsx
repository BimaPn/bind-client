'use client'
import { PostCommentProps, PostProps } from '@/types/post'
import { createContext, useState } from 'react'
import { PostsContextProps } from '@/types/post'
import { getSession } from 'next-auth/react'

export const postContext = createContext<PostsContextProps | null>(null)

const PostContext = ({children}:{children : React.ReactNode}) => {
    const [posts,setPosts] = useState<PostProps []>([])
    const addPost = (post:PostProps) => {
        setPosts((prevPosts) => {
          return [post,...prevPosts]
        })
    }
    const deletePost = (postId:string | number) => {
      setPosts((prevPosts) =>{
        return prevPosts.filter(post => post.id != postId)
      })
    }
    const updatePost = (post:PostProps) => {
      setPosts((prevPosts) => {
        return prevPosts.map((prevPost) => {
          if(prevPost.id == post.id) {
            return post
          }
          return prevPost; 
        })
      })
    }
    const updatePostLikes = (postId : string | number,isLiked : boolean) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if(post.id == postId) {
            return {
              ...post,
              isLiked : !isLiked,
              likedTotal : post.likedTotal += isLiked ? -1 : 1
            }
          }
          return post; 
        })
      })
    }
    const updatePostSave = (postId : string | number,isSaved : boolean) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if(post.id == postId) {
            return {
              ...post,
              isSaved : !isSaved,
            }
          }
          return post; 
        })
      })
    }
    const setPostComments = (postId : string | number,comments : PostCommentProps[],commentTotal : number) => {
      setPosts((prevPosts) => {
        const updatedPosts = prevPosts.map((post) => {
          if(post.id == postId) {
            post.comments = comments
            post.commentTotal = commentTotal
            return post
          }
          return post; 
        })
        return updatedPosts
      })
    }
    const addPostComment = async (postId : string | number,commentId : string | number,comment : string) => {
      const session = await getSession()
      const newComment : PostCommentProps = {
        id : commentId,
        user : {
          name : session?.user.name as string,
          profile_picture : session?.user.profile_picture as string,
          isVerified : session?.user.isVerified as boolean
        },
        comment : comment,
        created_at : 'Just now'
      }
      setPosts((prevPosts) => {
        const updatedPosts = prevPosts.map((post) => {
          if(post.id == postId) {
            post.comments?.unshift(newComment)
            post.commentTotal += 1
            return post
          }
          return post; 
        })
        return updatedPosts
      })
    }

  return (
    <postContext.Provider value={{ posts,addPost,deletePost,updatePost,setPosts,updatePostLikes,updatePostSave,setPostComments,addPostComment  }}>
        {children}
    </postContext.Provider>
  )
}

export default PostContext