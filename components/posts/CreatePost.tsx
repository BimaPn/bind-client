import { getServerSession } from "next-auth"
import RoundedImage from "../ui/RoundedImage"
import FormCreatePost from "./FormCreatePost"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

const CreatePost = async () => {
  const session = await getServerSession(authOptions)
  return (
    <section className="bg-light dark:bg-d_semiDark rounded-lg sm:shadow">    
        <div className="flex gap-3 px-4 py-3">
            < RoundedImage
            src={session?.user.profile_picture as string}
            alt="profile picture"
            className='!w-12' />
            <div className='w-full flex flex-col'>
                < FormCreatePost />
            </div>
        </div>
    </section>
  )
}


export default CreatePost