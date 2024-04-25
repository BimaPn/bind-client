type Message = {
  id: string 
  message: string
  created_at: string
  isCurrentAuth: boolean
}

type ChatItem = {
  message: string
  created_at: string
  user: UserChat
  isRead: boolean
}
type UserChat = {
  name:string
  profile_picture: string
  username: string
}

type ChatListProviderProps = {
  users: ChatItem[] | null
  setUsers: Dispatch<SetStateAction<ChatItem[] | null>>
  addToList: (chat: ChatItem) => void
  clearUnread: (username: string) => void
}
