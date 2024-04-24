'use client'

import { useEffect, useState } from "react"
import EchoConfig from "../api/pusher"
import ApiClient from "../api/axios/ApiClient"

const page = () => {
  const [message, setMessage] = useState<string>("")
  
  useEffect(() => {

    const initial = async () => {
      let socket;
      socket = await EchoConfig()
      if(socket){
        window.Echo = socket 
        window.Echo.private("testing")
        .listen('FriendRequest', (e:any) => {
          console.log("berhasil")
          console.log(e.message)
          setMessage(e.message)
        })
      }
    }
    initial()
  },[])

  // useEffect(() => {
  //   ApiClient.get(`/api/messages/chat-list`)
  //   .then((res) => {
  //     console.log(res.data)
  //     })
  //   .catch((err) => {
  //     console.log(err.response.data)
  //     })
  // },[])
 
  const addNotification = () => {
    ApiClient.post(`/api/testing`)
    .then((res) => {
      console.log(res.data.message)
      })
    .catch((err) => {
      console.log(err.response)
      })
  }
  return (
    <div>
      <div>
        notification : {message}
      </div>
      <div>
        <button onClick={() => addNotification()}
        className="px-4 py-2 border rounded-xl">Add notification</button>
      </div>

    </div>
  )
}

export default page
