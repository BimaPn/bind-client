export type UserProfileProps = {
    name : string,
    username : string,
    profile_picture : string,
    cover_photo : string,
    isVerified : boolean,
    bio : string,
    isFollow : boolean,
    followerTotal : number,
    followingTotal : number,
    postTotal : number,
    joinedAt :string
}
export type UserProfileContextProps = {
    user ?: UserProfileProps,
    setUser : Dispatch<SetStateAction<UserProfileProps>>,
    toggleIsFollow : () => void
}
export type UpdateProfileProps = {
    username: string,
    defaultName : string,
    defaultProfilePic : string,
    defaultCover : string,
    defaultBio : string,
    onClose : () => void
}
export type UserUpdateErrorsProps = {
    profile_picture : array,
    cover_photo : array
    name : array,
    bio : array
}