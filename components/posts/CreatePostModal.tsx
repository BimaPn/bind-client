'use client'
import Modal from '@/components/ui/Modal'
import {useState} from 'react'
import RoundedImage from '../ui/RoundedImage'
import FormCreatePost from './FormCreatePost'

const CreateGroupModal = ({children,profilePicture,groupId,className}:{children:React.ReactNode,profilePicture:string,groupId?: string | number,className?:string}) => {
  const [isOpenModal,setIsOpenModal] = useState<boolean>(false)
  return (
    <>
        <button 
        onClick={() => setIsOpenModal(prev => !prev)} 
        className={`${className}`}>
            {children}
        </button>

            <Modal 
            title="Create group"
            show={isOpenModal} 
            onClose={() => setIsOpenModal(false)}
            className="h-screen sm:!h-fit">
              <Modal.Body className="ss:rounded-b-xl rounded-none">
              <div className="flex gap-3 px-4 py-3">
                < RoundedImage
                src={profilePicture}
                alt="profile picture"
                className='!w-12' />
                <div className='w-full flex flex-col'>
                  < FormCreatePost onClose={() => setIsOpenModal(false)} groupId={groupId ? groupId : null} mobile />
                </div>
              </div>
              </Modal.Body>
            </Modal>
    </>
  )
}

export default CreateGroupModal