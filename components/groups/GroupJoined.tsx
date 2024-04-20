'use client'
import ApiClient from "@/app/api/axios/ApiClient"
import { GroupCardProps } from "@/types/group"
import Link from "next/link"
import { useEffect, useState } from "react"
import GroupCard from "./GroupCard"
import GroupCardSkeleton from "../skeleton/GroupCardSkeleton"

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
    <div className={`flex flex-col gap-4 pb-8`}>
      <div className="flexBetween">
        <h2 className="font-medium text-lg">Your groups</h2>
      </div>
        <div className="flex flex-col gap-4">
          {loading && < GroupCardSkeleton count={2} />}
          {groups?.length !== 0 && (
            <>            
            {groups?.map((group) => (
              <Link href={`/groups/${group.id}`} key={group.id}>              
                < GroupCard
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