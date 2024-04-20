'use client'
import { useState } from "react"
import UserContent from "./UserContent"
import UserMedia from "./UserMedia"

const UserBody = ({username} : {username : string}) => {
  const [selectedSection,setSelectedSection] = useState<string>('Posts')
  return (
    <>
    <div className="bg-light dark:bg-d_semiDark rounded-none ss:rounded-b-xl px-4">
        <div className="border-t dark:border-d_netral dark:text-d_semiLight">
            {['Posts','Media'].map((item,index) => (
                <button 
                onClick={() => setSelectedSection(item)}
                key={index} 
                className={`px-6 py-2
                ${selectedSection == item && 'border-b-2 dark:border-light border-dark dark:text-light font-medium'}`}>
                    {item}
                </button>
            ))}
        </div>
    </div>
        {selectedSection == 'Posts' ? 
            (
            < UserContent username={username} />
            ) : 
            (
            < UserMedia username={username} />
            )
        }
    </>
  )
}

export default UserBody