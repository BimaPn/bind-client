'use client'
import { useContext, useEffect, useState } from "react"
import { PostsContextProps } from "@/types/post"
import { postContext } from "../providers/PostContext"
import PostsContent from "../posts/PostsContent"
import ApiClient from "@/app/api/axios/ApiClient"
import PostSkeleton from "../skeleton/PostSkeleton"

const PostsSaved = () => {
    const { posts,setPosts } = useContext(postContext) as PostsContextProps
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(() => {
       const getPosts = async () => {
        ApiClient.get(`/api/posts/saved`)
        .then((res) => {
          setPosts(res.data.posts)
          setLoading(false)
        })
       } 
       getPosts()
    },[])
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-1 ss:m-0">
      
    {loading && (< PostSkeleton count={3} />)}

    {posts.length != 0 && !loading && (
      < PostsContent
      posts={posts} />
    )}
    </div>
    </>
  )
}

export default PostsSaved