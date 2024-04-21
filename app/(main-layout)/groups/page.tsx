import Link from "next/link"
import PageHeader from "@/components/ui/PageHeader"
import { FiPlus } from "react-icons/fi"
import SearchGroup from "@/components/groups/SearchGroup"
import GroupsDiscover from "@/components/groups/GroupsDiscover"
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import GroupJoined from "@/components/groups/GroupJoined"
import CreateGroup from "@/components/groups/CreateGroup"

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <section className="bg-light dark:bg-d_semiDark rounded-xl sm:shadow">
        < PageHeader title="Groups" className="block ss:hidden" />
        <div className="px-2 ss:px-4">
            <div className="flex items-center gap-3 mb-4 pt-0 ss:pt-6">
                < SearchGroup className="w-64"/>
                <CreateGroup className="px-2 py-2 aspect-square bg-semiLight dark:bg-d_netral rounded-full hover:bg-gray-200">
                    < FiPlus className="text-lg text-dark dark:text-light" />
                </CreateGroup>
            </div>
            < GroupJoined username={session?.user.username as string} />
            < GroupsDiscover/>
        </div>
    </section>
  )
}



export default page
