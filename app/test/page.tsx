'use client'

import { useEffect, useState } from "react"
import EchoConfig from "../api/pusher"
import ApiClient from "../api/axios/ApiClient"
import Echo from "laravel-echo"

const page = () => {
  // const [echo, setEcho] = useState<Echo|null>(null)
  const [message, setMessage] = useState<string>("")
  
  const socketInitial = async () => {
  
  }
  useEffect(() => {
    let socket;
    const initial = async () => {
      // setEcho(await EchoConfig())
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
  //   if(echo) {
  //     window.Echo = echo
  //     window.Echo.private("testing")
  //     .listen('FriendRequest', (e:any) => {
  //       console.log("berhasil")
  //       console.log(e.message)
  //       setMessage(e.message)
  //     })
  //   }
  // },[echo])
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
