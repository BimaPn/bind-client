import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ChatSection from "@/components/chat/ChatSection"
import axios from "axios";
import { getServerSession } from "next-auth";

type Props = {
  params: { username: string };
};

const page = async ({params}:Props) => {
  const session = await getServerSession(authOptions)
  const headers = { 'Authorization': `Bearer ${session?.user.access_token}` };
  let data = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/messages/${params.username}/all`,{headers})
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(err.response.data)
    throw Error(err.response.data)
  })
  return (
    <>
      <ChatSection initialMessages={data.messages} userTarget={data.userTarget} authId={session?.user.id} />
    </>
   )
}

export default page
