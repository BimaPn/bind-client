'use client'
import ApiClient from "@/app/api/axios/ApiClient"
import { useContext, useEffect, useState } from "react"
import { postContext } from "../providers/PostContext"
import { PostsContextProps } from "@/types/post"
import PostsContent from "../posts/PostsContent"
import PostSkeleton from "../skeleton/PostSkeleton"

const UserContent = ({username} : {username : string}) => {
    const { posts,setPosts } = useContext(postContext) as PostsContextProps
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getPosts = async () => {
         ApiClient.get(`/api/${username}/posts`)
         .then((res) => {
           setPosts(res.data.posts)
           setLoading(false)
         })
        } 
        getPosts()
     },[])
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-2 ss:mt-4">
      
    {loading && (< PostSkeleton count={2} />)}

    {posts.length != 0 && !loading && (
      < PostsContent
      posts={posts} />
    )}
    </div>
    </>
  )
}

export default UserContent