type NotificationSender = {
  name: string
  profile_picture: string
}

type NotificationEntity = {
  name: string
  identifier: string
  message?: string
}

type NotificationItem = {
  id: string
  sender: NotificationSender
  message: string
  entity: NotificationEntity
  created_at: string
}


type NotificationProviderProps = {
  notifications: NotificationItem[] | null
  setNotifications: Dispatch<SetStateAction<NotificationItem[] | null>>
  unreadCount: number
}
