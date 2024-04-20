'use client'
import { PostProps } from "@/types/post"
import Post from "./Post"
import { useState } from "react"
import PostModal from "./PostModal"

const PostsContent = ({posts} : {posts?:PostProps[]}) => {
  const [post,setPost] = useState<PostProps | null>(null)
  return posts ? (
    <>
    {post != null && (
      <PostModal
      show={post != null ? true : false}
      onClose={() => setPost(null)}
      post={post}/>
    )}    
      {posts.map((post) => (
        <div className="w-full rounded-xl shadow" key={post.id} onClick={() => setPost(post)}>
          <Post 
          id={post.id}
          caption={post.caption}
          user={post.user}
          commentTotal={post.commentTotal}
          likedTotal={post.likedTotal}
          media={post.media}
          created_at={post.created_at}
          isLiked={post.isLiked}
          isSaved={post.isSaved}
          isAuthor={post.isAuthor}/>
        </div>
      ))}
    </>
  ) : (
    <div>no posts</div>
  )
}

export default PostsContent