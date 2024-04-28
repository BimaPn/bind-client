'use client'
import ApiClient from "@/app/api/axios/ApiClient"
import { GroupCardProps } from "@/types/group"
import Link from "next/link"
import { useEffect, useState } from "react"
import GroupCard from "./GroupCard"
import GroupCardSkeleton from "../skeleton/GroupCardSkeleton"
import CreateGroup from "./CreateGroup"
import SearchGroup from "./SearchGroup"
import { FiPlus } from "react-icons/fi"

const GroupJoined = ({username} : {username : string}) => {
    const [groups,setGroups] = useState<GroupCardProps[]>()
    const [isShowMore,setIsShowMore] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(() => {
        const getPosts = async () => {
         ApiClient.get(`/api/${username}/groups/preview`)
         .then((res) => {
            setGroups(res.data.groups)
            setIsShowMore(res.data.isShowMore)
            setLoading(false)
         })
        } 
        getPosts()
     },[])
  return (
    <div className={`flex flex-col gap-2 ss:gap-4 dark:bg-d_semiDark bg-white ss:rounded-xl px-3 ss:px-4 pt-1 ss:pt-4 pb-3 ss:pb-5 ss:shadow`}>

    <div>
      <div className="flex flex-col items-center text-center mb-5">
        <span className="font-semibold ss:text-lg">Search Something Dirty Yeah</span>
        <span className="text-xs ss:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className="flex justify-center items-center gap-2">
          <SearchGroup className="w-[90%] ss:w-[70%]"/>
          <CreateGroup className="px-2 py-2 aspect-square bg-semiLight dark:bg-d_netral rounded-full hover:bg-gray-200">
              <FiPlus className="text-lg text-dark dark:text-light" />
          </CreateGroup>
      </div>
    </div>


      <div className="flexBetween pt-2 pb-1 ss:pb-0 ss:pt-0">
        <h2 className="font-semibold ss:text-lg">Your groups</h2>
      </div>
        <div className="grid grid-cols-1 ss:grid-cols-2 gap-3">
          {loading && < GroupCardSkeleton count={2} />}
          {groups?.length !== 0 && (
            <>            
            {groups?.map((group) => (
              <Link href={`/groups/${group.id}`} key={group.id}>              
                <GroupCard
                id={group.id}
                name={group.name}
                group_picture={group.group_picture}
                memberTotal={group.memberTotal} 
                isJoin={group.isJoin}/>
              </Link>
            ))}
            </>
          )}
          {groups?.length == 0 && !loading && <div>you are not join any group :</div>}
        </div>
      {isShowMore && (
        <Link href={`/groups/discover`} className="w-fit rounded-full px-4 py-2 bg-blue-100 text-blue-600 font-medium">
            Show more 
        </Link>
      )}
    </div>
  )
}

export default GroupJoined
