
export type PostsContextProps = {
    posts : PostProps[],
    setPosts: Dispatch<SetStateAction<PostProps[]>>
    addPost : (posts:PostProps) => void,
    deletePost : (postId:string | number) => void,
    updatePost : (post:PostProps) => void,
    updatePostLikes : (postId : string | number,isLiked : boolean) => void,
    updatePostSave : (postId : string | number,isSaved : boolean) => void
    setPostComments : (postId : string | number,comments : PostCommentProps[],commentTotal : number) => void,
    addPostComment : (postId : string | number,commentId : string | number,comment : string) => void
} 
export type CreatePostFormProps = {
    caption ?: string,
    group_id ?: string | number | null,
    media ?: File[]
}
export type PostUpdateProps = {
    caption ?: string,
    media_new ?: File[],
    media_delete_id ?: array,
    _method ?: string
}
export type NewPostProps = {
    user : {
        name : string,
        username : string,
        image : string,
        verified : boolean
    },
    caption : string,
    created_at : string
}
export type PostMediaProps = {
    id : string | number,
    file_path : string,
}
export type PostProps = {
    id : string | number,
    user : {
        name : string,
        username : string,
        profile_picture : string,
        isVerified : boolean
    },
    caption : string,
    media ?: PostMediaProps[],
    likedTotal : number,
    commentTotal : number,
    isLiked : boolean,
    isSaved : boolean,
    isAuthor : boolean,
    comments ?: PostCommentProps[],
    created_at : string
}
export type PostEditProps = {
    profile_picture : string,
    caption : string,
    media ?: PostMediaProps[]
}
export type PostCommentProps = {
    id : string | number,
    user : {
        name : string,
        profile_picture : string,
        isVerified : boolean
    },
    comment : string,
    created_at : string
}
export type PostEditContextProps = {
    postId : string | number | null,
    setPostId: Dispatch<SetStateAction<string | number | null>>
}