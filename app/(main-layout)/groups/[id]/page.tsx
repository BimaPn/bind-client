import GroupContext from '@/components/providers/GroupContext';
import axios from "axios";
import { Metadata } from 'next';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GroupHeader from "@/components/groups/GroupHeader";
import GroupBody from '@/components/groups/GroupBody';
import PageHeader from '@/components/ui/PageHeader';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreatePostModal from '@/components/posts/CreatePostModal';

const getGroupData = async (groupId : string | number) => {
  const session = await getServerSession(authOptions)
  const headers = { 'Authorization': `Bearer ${session?.user.access_token}` };
  let data = await axios.get(`http://bindapi.test/api/group/${groupId}`,{headers})
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    throw Error(err.data)
  })
  return data
}

type Props = {
  params: { id: string | number };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getGroupData(params.id);
  return {
    title: data.group.name
  };
}

const page = async ({params}:Props) => {
  const session = await getServerSession(authOptions)
  const data = await getGroupData(params.id);
  return (
    <>    
      <GroupContext groupData={data.group}>
        < PageHeader title={data.group.name} className="ss:hidden block">
          <CreatePostModal groupId={params.id} profilePicture={session?.user.profile_picture as string} className='block ss:hidden'>
            {data.group.isJoin && (
              < IoIosAddCircleOutline className='text-3xl text-dark dark:text-light' />
            )}
          </CreatePostModal>
        </PageHeader>
        <div className='mt-[55px] ss:m-0'>
          < GroupHeader />
          < GroupBody authProfilePicture={session?.user.profile_picture as string} groupId={params.id} />
        </div>
      </GroupContext>
    </>
  )
}

export default page