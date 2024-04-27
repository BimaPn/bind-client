import { Metadata } from 'next';
import UserProfileContext from "@/components/providers/UserProfileContext";
import { getServerSession } from "next-auth";
import UserHeader from "@/components/users/UserHeader";
import UserBody from "@/components/users/UserBody";
import PageHeader from "@/components/ui/PageHeader";
import axios from "axios";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const getUserData = async (username : string | number) => {
  const session = await getServerSession(authOptions)
  const headers = { 'Authorization': `Bearer ${session?.user.access_token}` };
  let data = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/${username}`,{headers})
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    throw Error(err)
  })
  return data
}

type Props = {
  params: { username: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.username
  };
}

const User = async ({params}:Props) => {
  const session = await getServerSession(authOptions)
  const data = await getUserData(params.username)
  return (
    <div className="flex flex-col">
      <UserProfileContext userData={data.user}>
        < PageHeader title={params.username} showWideScreen={false} className="ss:hidden block" />
        <div>
          < UserHeader authUsername={session?.user.username as string}  />
          < UserBody username={params.username} />
        </div>
      </UserProfileContext>
    </div>
  )
}


export default User
