import Link from "next/link"
import PageHeader from "@/components/ui/PageHeader"
import GroupsDiscover from "@/components/groups/GroupsDiscover"
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import GroupJoined from "@/components/groups/GroupJoined"

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <section>
      <PageHeader title="Groups" showWideScreen={false} />
        <div className="flex flex-col gap-2 ss:gap-4">
            <GroupJoined username={session?.user.username as string} />
            <GroupsDiscover/>
        </div>
    </section>
  )
}

export default page


