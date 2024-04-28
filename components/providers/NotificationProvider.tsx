"use client"
import ApiClient from "@/app/api/axios/ApiClient"
import EchoConfig from "@/app/api/pusher"
import Echo from "laravel-echo"
import { createContext, useContext, useEffect, useState } from "react"

const notificationContext = createContext<NotificationProviderProps | null>(null)

const NotificationProvider = ({children, userId}:{children: React.ReactNode, userId: string}) => {
  const [notifications, setNotifications] = useState<NotificationItem[] | null>(null)
  const [unreadCount, setUnreadCount] = useState<number>(0)

  useEffect(() => {
    ApiClient.get(`/api/notifications/unread-count`)
    .then((res) => {
      setUnreadCount(res.data.count)
    })
    .catch((err) => {
      console.log(err.response.data)
    })

    let socket: Echo
    const initial = async () => {
      socket = await EchoConfig()
      if(socket){
        socket.private(`notification.${userId}`)
        .listen('SendedNotification', (e:any) => {
          console.log(e) 
          setUnreadCount((prev) => prev+1)
          if(notifications) {
            setNotifications((prev) => [e, ...prev as NotificationItem[] ])
          }
        })
      }
    }
    initial()

    return () => {
      socket.disconnect()
    }
  },[])
  return (
    <notificationContext.Provider value={{ notifications, setNotifications, unreadCount }}>
      {children}
    </notificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(notificationContext) as NotificationProviderProps
}

export default NotificationProvider
