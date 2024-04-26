"use client"

import { createContext, useContext, useState } from "react"

type ChatCountProps = {
  chatCount: number
  modifyCount: (value:number) => void
  initialCount: (value: number) => void
}

const chatCountContext = createContext<ChatCountProps | null>(null)

const ChatCountProvider = ({children}:{children: React.ReactNode}) => {
  const [chatCount, setChatCount] = useState<number>(0)

  const modifyCount = (value: number) => {
    if(chatCount < 0 || (value < 0 && chatCount <= 0)) return;
    setChatCount((prev) => prev+value)
  }
  const initialCount = (value:number) => {
    if(value < 0) return;
    setChatCount(value)
  }
  return (
    <chatCountContext.Provider value={{ chatCount, modifyCount, initialCount }}>
    {children}
    </chatCountContext.Provider>
  )
}

export const useChatCount = () => {
  return useContext(chatCountContext) as ChatCountProps
}

export default ChatCountProvider
