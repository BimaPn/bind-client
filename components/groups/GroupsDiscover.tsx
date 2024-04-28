import fakeGroups from "@/constants/groupDiscover"
import GroupCard from "./GroupCard"
import Link from "next/link"

const GroupsDiscover = ({className}:{className ?: string}) => {
  return (
    <div className={`dark:bg-d_semiDark bg-white flex flex-col gap-2 ss:gap-4 px-3 ss:px-4 pb-3 ss:pb-4 pt-3 ss:rounded-xl ss:shadow ${className}`}>
      <div className="pb-1 ss:pb-0">
        <h2 className="font-semibold ss:text-lg">Discover Groups</h2>
      </div>
        <div className="grid grid-cols-1 ss:grid-cols-2 gap-3">
            {fakeGroups.map((group) => (
              <Link href={`/groups/${group.id}`} key={group.id}>              
                <GroupCard
                id={group.id}
                name={group.name}
                group_picture={group.group_picture}
                memberTotal={group.memberTotal}
                isJoin={group.isJoin} />
              </Link>
            ))}
        </div>
      <Link href={`/groups/discover`} className="text-blue-600 font-medium ss:-mt-1">
        Show more 
      </Link>
    </div>
  )
}

export default GroupsDiscover
