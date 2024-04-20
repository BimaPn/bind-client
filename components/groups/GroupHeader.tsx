'use client'
import { BsThreeDots } from "react-icons/bs"
import Image from "next/image"
import GroupJoinButton from "./GroupJoinButton"
import { useContext} from "react"
import { groupContext } from "../providers/GroupContext"
import { GroupContextProps } from "@/types/group"
import EditGroup from "./EditGroup"

const GroupHeader = () => {
    const { group,setIsJoin } = useContext(groupContext) as GroupContextProps
  return (
    <>
    {group && (
    <section className="bg-light dark:bg-d_semiDark sm:shadow rounded-none ss:rounded-t-xl ss:overflow-hidden">
        <div className="aspect-[2.35/1] relative">
            <Image 
            src={group?.group_picture}
            fill
            objectFit="cover"
            alt="group picture"/>
        </div>

    <div className="pb-3 flex flex-col px-4 pt-4 text-dark dark:text-d_light">
      <h1 className="font-bold text-2xl">{group?.name}</h1>
      <p className="break-all my-2">{group?.description}</p>
      <div className="flex ss:items-center flex-col ss:flex-row ss:justify-between gap-2">
        <div className="flex items-center gap-1">
          <span className="font-medium">{group?.memberTotal}</span>
          <span className="text-semiDark dark:text-d_semiLight">Members</span>
        </div>
        <div className="flex flex-row ss:flex-row-reverse items-center gap-[6px]">
          < GroupJoinButton 
          isJoin={group?.isJoin}
          changeIsJoin={(result) => setIsJoin(result)}
          groupId={group.id}
          className="!w-full ss:!w-fit" />
          <div className="ss:block hidden">
            {group.isAdmin && (
              <EditGroup id={group.id} name={group.name} description={group.description} group_picture={group.group_picture}/>
            )}
          </div>
          <button className="px-[10px] aspect-square rounded-full bg-semiLight dark:bg-d_netral text-dark dark:text-light">
            < BsThreeDots className="text-xl" />
          </button>
        </div>
      </div>
    </div>
    </section>
    )}
    </>
  )
}

export default GroupHeader