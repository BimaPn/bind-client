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
    <div className={`flex pb-2 gap-3 ss:gap-4 hover:cursor-pointer ${className}`}>
        <div className="min-w-[128px] border dark:border-0 ss:w-[152px] h-fit aspect-video rounded-lg overflow-hidden relative">
            <Image 
            src={group_picture}
            fill
            objectFit="cover"   
            alt="group picture"/>
        </div>
        <div className="w-fit">
            <span className="break-all text-base ss:text-lg font-medium">{name}</span>
            <div>
                <div className="flex items-center gap-1 text-sm text-semiDark dark:text-d_semiLight">
                    <span>{group.memberTotal}</span>
                    <span>Members</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GroupCard