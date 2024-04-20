import FormCreatePost from '@/components/posts/FormCreatePost'
import RoundedImage from '@/components/ui/RoundedImage'
import React from 'react'

const CreatePostGroup = ({authProfilePicture,groupId}:{authProfilePicture:string,groupId:string | number}) => {
  return (
    <section className="w-full bg-light dark:bg-d_semiDark rounded-xl sm:shadow">    
        <div className="flex gap-3 px-4 py-3">
            < RoundedImage
            src={authProfilePicture}
            alt="profile picture"
            className='!w-12' />
            <div className='w-full flex flex-col'>
                < FormCreatePost groupId={groupId} />
                <div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreatePostGroup