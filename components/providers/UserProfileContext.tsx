'use client'
import { UserProfileContextProps, UserProfileProps } from '@/types/user'
import { useState,createContext } from 'react'
export const userProfileContext = createContext<UserProfileContextProps | null>(null)

const UserProfileContext = ({children,userData}:{children : React.ReactNode,userData : UserProfileProps}) => {
  const [user,setUser] = useState<UserProfileProps>(userData)

  const toggleIsFollow = () => {
    setUser((prev) => {
      let follower = prev?.isFollow ? -1 : 1;
      let followerTotal = prev?.followerTotal ?? 0;
      return {
        ...prev!,
        isFollow: !prev?.isFollow,
        followerTotal : followerTotal + follower ,
      }
    });
  }
  return (
    <userProfileContext.Provider 
    value={{user,setUser,toggleIsFollow}}>
        {children}
    </userProfileContext.Provider>
  )
}

export default UserProfileContext