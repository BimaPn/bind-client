import PageHeader from '@/components/ui/PageHeader'
import Post from '@/components/posts/Post'
import posts from '@/constants/posts'
import { BsThreeDots } from "react-icons/bs"
import PostsSaved from '@/components/saved/PostsSaved'

const page = () => {
  return (
    <>
        <PageHeader title='Saved'>
            < BsThreeDots className='text-xl' />
        </PageHeader>
        <div className='mt-[56px] ss:m-0'>
        < PostsSaved />
        </div>
    </>
  )
}

export default page