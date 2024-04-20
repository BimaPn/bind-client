'use client'
import { useState } from "react"
import GroupHome from "./GroupHome"
import GroupAbout from "./GroupAbout"

const GroupBody = ({authProfilePicture,groupId}:{authProfilePicture : string,groupId : string | number}) => {
  const [selectedSection,setSelectedSection] = useState<string>('Home')
  return (
    <>
    <div className="bg-light dark:bg-d_semiDark rounded-none ss:rounded-b-xl px-4">
      <div className="flex items-center gap-4 border-t dark:border-d_netral dark:text-d_semiLight">
        {['Home','Section'].map((section,index) => (
          <button
          key={index}
          onClick={() => setSelectedSection(section)} 
          className={`px-8 py-2
          ${selectedSection == section && 'border-b-2 dark:border-light border-dark dark:text-light font-medium'}`}>
              {section}
          </button>
        ))}
      </div>
    </div>
    
    <div className="mt-2 ss:mt-3">
      {selectedSection == "Home" ? (
      < GroupHome authProfilePicture={authProfilePicture} groupId={groupId} />
      ) : 
      (
      < GroupAbout />
      )
      }
    </div>
    </>
  )
}
export default GroupBody