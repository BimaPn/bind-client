import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
const ServerSession = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div>
        <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}

export default ServerSession