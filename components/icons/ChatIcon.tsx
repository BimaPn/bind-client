"use client"
import ApiClient from "@/app/api/axios/ApiClient"
import EchoConfig from "@/app/api/pusher"
import { useEffect, useState } from "react"
import { useChatCount } from "../providers/ChatCountProvider"

const ChatIcon = ({width=24,active = false,userId,className}:{width?:number,active?:boolean,userId: string,className?:string}) => {
  const { chatCount, initialCount, modifyCount } = useChatCount()

  useEffect(() => {
    ApiClient.get(`/api/messages/unread-count`)
    .then((res) => {
      initialCount(res.data.count)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
    const initial = async () => {
      let socket;
      socket = await EchoConfig()
      if(socket){
        window.Echo = socket 
        window.Echo.private(`chat.${userId}`)
        .listen('SendedMessage', (e:any) => {
           modifyCount(1) 
        })
      }
    }
    initial()
  },[])
  return (
    <div className="relative">
      <ChatSvg width={width} active={active} className={className} />
        {chatCount > 0 && (
          <div className={`${chatCount <= 10 ? "w-[15px] text-[10px]":"w-4 text-[9px]"} absolute -top-1 -right-1 flexCenter aspect-square rounded-full bg-red-500 font-bold`}>
          {(chatCount <= 10) && chatCount}
          {(chatCount > 10) && `${chatCount}+`}
          </div>
        )}

    </div>
  )
}

export const ChatSvg = ({width=24,active = false,className}:{width?:number,active?:boolean,className?:string}) => {
  return (
  <svg width={width} className={className} viewBox="0 0 101 93" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.5 7.5L51.5 3.5L32 7.5L13 23.5L5.5 48.5L15 73L5.5 90H24.5H53L74.5 84.5L87.5 73L96 56.5V37L87.5 20L71.5 7.5Z" className={active ? 'fill-dark dark:fill-light':'fill-none'}/>
    <path d="M34.11 92.61H34.19C41.74 92.61 49.19 92.52 56.73 92.31C62.38 92.15 68.29 90.31 73.53 87.95C89.85 80.73 98.82 66.49 99.6 51.86C99.78 50.58 99.9 49.2934 99.96 48C101.14 22.49 78.51 4.10574e-05 51.96 4.10574e-05C43.4014 -0.0111514 34.9955 2.26619 27.6131 6.59615C20.2306 10.9261 14.1401 17.1512 9.97253 24.6265C5.80495 32.1018 3.71187 40.5555 3.91011 49.1118C4.10834 57.6681 6.59069 66.0157 11.1 73.29C11.0205 74.0349 10.7999 74.7577 10.45 75.42C7.23 81.03 3.73 86.47 0 92.51C10.75 92.51 21.28 92.61 31.72 92.61H34.11ZM10.78 86.53C12.46 83.81 14.08 81.14 15.65 78.41C16.402 77.0527 16.881 75.5614 17.06 74.02L17.31 71.93L16.2 70.13C12.2473 63.7661 10.0687 56.4607 9.89012 48.9712C9.71154 41.4817 11.5395 34.0808 15.1844 27.5356C18.8293 20.9905 24.1585 15.5394 30.6196 11.7475C37.0807 7.95554 44.4384 5.9608 51.93 5.97004C57.7194 6.01312 63.4404 7.22486 68.7501 9.53261C74.0598 11.8404 78.8488 15.1966 82.83 19.4C90.48 27.4 94.43 37.47 93.96 47.72C93.91 48.81 93.81 49.93 93.65 51.03V51.29V51.55C92.93 65 84.52 76.55 71.16 82.46C65.6 84.89 60.71 86.18 56.56 86.29C49.99 86.48 42.92 86.58 34.32 86.59H31.72C26.56 86.59 21.25 86.59 16.13 86.54L10.78 86.53Z" className='fill-dark dark:fill-light'/>
    <path d="M52.1302 52.04C53.2699 52.0519 54.3875 51.7248 55.3409 51.1003C56.2944 50.4757 57.0407 49.5819 57.4851 48.5324C57.9295 47.4828 58.052 46.3248 57.8369 45.2055C57.6219 44.0862 57.0791 43.056 56.2773 42.2459C55.4756 41.4357 54.4512 40.8821 53.3342 40.6553C52.2172 40.4285 51.058 40.5388 50.0039 40.9722C48.9497 41.4056 48.0481 42.1425 47.4136 43.0894C46.7791 44.0362 46.4403 45.1502 46.4402 46.29C46.453 47.8007 47.0547 49.2469 48.1173 50.3207C49.18 51.3946 50.6197 52.0114 52.1302 52.04Z" className={active ? 'fill-light dark:fill-dark' : 'fill-dark dark:fill-light'}/>
    <path d="M37.44 46.36C37.4499 45.2262 37.1226 44.115 36.4997 43.1676C35.8768 42.2202 34.9864 41.4793 33.9415 41.0389C32.8966 40.5986 31.7445 40.4788 30.6314 40.6946C29.5182 40.9105 28.4944 41.4523 27.6898 42.2512C26.8852 43.0501 26.3363 44.0701 26.1126 45.1817C25.8889 46.2933 26.0007 47.4463 26.4337 48.4942C26.8666 49.5421 27.6013 50.4378 28.5443 51.0673C29.4873 51.6969 30.5961 52.032 31.73 52.03C33.2351 52.0223 34.6769 51.4237 35.7449 50.3631C36.8129 49.3026 37.4217 47.865 37.44 46.36Z" className={active ? 'fill-light dark:fill-dark' : 'fill-dark dark:fill-light'}/>
    <path d="M72.6602 52.04C73.7987 52.046 74.9134 51.7138 75.8629 51.0856C76.8124 50.4574 77.5541 49.5615 77.9939 48.5113C78.4337 47.4612 78.5518 46.3041 78.3334 45.1868C78.1149 44.0694 77.5696 43.042 76.7667 42.2349C75.9638 41.4277 74.9393 40.8771 73.8231 40.6528C72.7069 40.4285 71.5492 40.5406 70.4968 40.9749C69.4443 41.4092 68.5445 42.1462 67.9114 43.0924C67.2782 44.0386 66.9402 45.1515 66.9402 46.29C66.9402 47.8098 67.5419 49.2678 68.6137 50.3453C69.6856 51.4228 71.1404 52.0321 72.6602 52.04Z" className={active ? 'fill-light dark:fill-dark' : 'fill-dark dark:fill-light'}/>
  </svg>
  )
}
export default ChatIcon
