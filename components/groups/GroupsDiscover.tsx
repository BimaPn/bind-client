import fakeGroups from "@/constants/groupDiscover"
import GroupCard from "./GroupCard"
import Link from "next/link"

const GroupsDiscover = ({className}:{className ?: string}) => {
  return (
    <div className={`flex flex-col gap-4 pb-8 ${className}`}>
      <div>
        <h2 className="font-medium text-lg">Discover Groups</h2>
      </div>
        <div className="flex flex-col gap-4">
            {fakeGroups.map((group) => (
              <Link href={`/groups/${group.id}`} key={group.id}>              
                < GroupCard
                id={group.id}
                name={group.name}
                group_picture={group.group_picture}
                memberTotal={group.memberTotal}
                isJoin={group.isJoin} />
              </Link>
            ))}
        </div>
      <Link href={`/groups/discover`} className="w-fit rounded-full px-4 py-2 bg-blue-100 dark:bg-d_netral dark:text-d_light text-blue-600 font-medium">
        Show more 
      </Link>
    </div>
  )
}

export default GroupsDiscover