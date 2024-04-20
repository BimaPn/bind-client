'use client'
import { GroupContextProps, GroupProps } from '@/types/group'
import {createContext, useState} from 'react'

export const groupContext = createContext<GroupContextProps | null>(null)

const GroupContext = ({children,groupData}:{children : React.ReactNode,groupData : any}) => {
  const [group,setGroup] = useState<GroupProps>(groupData)
  const setName = (name:string) => {
    setGroup((prev) => ({...prev!,name:name}))
  }
  const setIsJoin = (condition : boolean) => {
    setGroup((prev) => ({...prev!,isJoin:condition}))
  }
  const isJoin = () => {
    if(group?.isJoin){
      return group.isJoin
    }
    return false
  }
  return (
    <groupContext.Provider 
    value={{group,setGroup,setName,setIsJoin,isJoin}}
    >
        {children}
    </groupContext.Provider>
  )
}

export default GroupContext