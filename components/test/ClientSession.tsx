'use client'
import { useSession } from "next-auth/react"
import { useState,useEffect } from 'react'
const ClientSession = () => {
    const {data:session} = useSession()
    const [formData,setformData] = useState<File[]>()
    useEffect(() => {
      console.log(formData)
    },[formData])
  return (
    <div>
        <pre>
            {session?.user.access_token}
        </pre>
    </div>
  )
}

export default ClientSession