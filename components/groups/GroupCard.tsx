'use client'
import Image from "next/image"
import GroupJoinButton from "./GroupJoinButton"
import { GroupCardProps } from "@/types/group"
import { useState } from "react"

const GroupCard = ({id,group_picture,name,memberTotal,isJoin,className}:GroupCardProps) => {
    const [group,setGroup] = useState<GroupCardProps>({
        id,
        name,
        group_picture,
        memberTotal,
        isJoin
    })
  return (
    <div className={`flex flex-col border dark:border-d_netral pb-2 gap-1 hover:cursor-pointer overflow-hidden rounded-xl ${className}`}>
        <div className="w-full h-fit aspect-video relative">
            <Image 
            src={group_picture}
            fill
            objectFit="cover"   
            alt="group picture"/>
        </div>
        <div className="w-fit px-2">
            <span className="block w-full truncate text-[15px] font-medium mb-[2px]">{name}</span>
            <div>
                <div 
                className="flex items-center gap-1 text-xs text-semiDark dark:text-d_semiLight"
                >
                    <span>{group.memberTotal}</span>
                    <span>Members</span>
                </div>
            </div>
        </div>
        <div className="px-2 mt-2 mb-[2px]">
          <button className="w-full dark:bg-d_netral bg-semiLight font-medium rounded-full py-[5px]">Join</button>
        </div>
    </div>
  )
}

export default GroupCard
