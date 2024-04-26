"use client"
import { createContext, useCallback, useContext, useState } from "react"

const chatListContext = createContext<ChatListProviderProps | null>(null)

const ChatListProvider = ({children}:{children:React.ReactNode}) => {
  const [users, setUsers] = useState<ChatItem[] | null>(null)

  const addToList = useCallback((chat: ChatItem) => {
    setUsers((prev) => {
      if(!prev) return null
      const filteredData = prev.filter((user) => user.user.username !== chat.user.username)
      return [chat, ...filteredData]
    })
  },[])

  const clearUnread = (username: string) => {
    setUsers((prev) => {
      if(!prev) return null
      return prev.map((chat) => {
        if(chat.user.username === username) {
          chat.isRead = true
        }
        return chat
      })
    })
  }
  return (
    <chatListContext.Provider value={{ users, setUsers, addToList, clearUnread}}>
    {children}
    </chatListContext.Provider>
  )
}

export const useChatList = () => {
  return useContext(chatListContext) as ChatListProviderProps
}

export default ChatListProvider
