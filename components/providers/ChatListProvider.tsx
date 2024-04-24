"use client"
import { createContext, useContext, useState } from "react"

const chatListContext = createContext<ChatListProviderProps | null>(null)

const ChatListProvider = ({children}:{children:React.ReactNode}) => {
  const [users, setUsers] = useState<ChatItem[] | null>(null)

  const addToList = (chat: ChatItem) => {
    setUsers((prev) => {
      if(!prev) return null
      const filteredData = prev.filter((user) => user.user.username !== chat.user.username)
      return [chat, ...filteredData]
    })
  }
  return (
    <chatListContext.Provider value={{ users, setUsers, addToList }}>
    {children}
    </chatListContext.Provider>
  )
}

export const useChatList = () => {
  return useContext(chatListContext) as ChatListProviderProps
}

export default ChatListProvider
