'use client'
import { useContext, useEffect, useState } from "react"
import CreatePostGroup from "./post/CreatePostGroup"
import ApiClient from "@/app/api/axios/ApiClient"
import { postContext } from "../providers/PostContext"
import { PostsContextProps } from "@/types/post"
import PostSkeleton from "../skeleton/PostSkeleton"
import PostsContent from "../posts/PostsContent"
import { groupContext } from "../providers/GroupContext"
import { GroupContextProps } from "@/types/group"

const GroupHome = ({authProfilePicture,groupId}:{authProfilePicture:string,groupId:string | number}) => {
  const { posts,setPosts } = useContext(postContext) as PostsContextProps
  const { isJoin } = useContext(groupContext) as GroupContextProps
  const [loading,setLoading] = useState<boolean>(true)
  useEffect(() => {
    ApiClient.get(`/api/group/${groupId}/posts`)
    .then((res) => {
      setPosts(res.data.posts)
      setLoading(false)
    })
  },[])
  return (
    <div>
      <div className="flexCenter flex-col gap-1 sm:gap-3 mt-2 ss:mt-4">
        {!loading && (
        <>
        {isJoin() && (
          <div className='w-full hidden ss:block'>
            < CreatePostGroup authProfilePicture={authProfilePicture} groupId={groupId} />
          </div>
        )}
        < PostsContent posts={posts}/>
        </>
        )}
        {loading && (
          <PostSkeleton count={2}/>
        )}
      </div>
    </div>
  )
}

export default GroupHome