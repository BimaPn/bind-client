'use client'
import {useState} from 'react'
import Modal from '../ui/Modal'
import { GroupProps } from '@/types/group'
import FormUpdateGroup from './form/FormUpdateGroup'

const EditGroup = ({id,group_picture,name,description}:Pick<GroupProps,'id'|'group_picture'|'name'|'description'>) => {
    const [isOpenModal,setIsOpenModal] = useState<boolean>(false)
  return (
    <div>
        <button 
        onClick={() => setIsOpenModal(prev => !prev)} 
        className="py-2 px-4 bg-semiLight dark:bg-d_netral font-medium rounded-full">
            Edit group
        </button>
        <Modal 
        title="Edit Group" 
        show={isOpenModal} 
        onClose={() => setIsOpenModal(false)} >
                < FormUpdateGroup 
                groupId={id} 
                defaultPicture={group_picture} 
                defaultName={name} 
                defaultDesc={description}
                onClose={() => setIsOpenModal(false)} />
        </Modal>
    </div>
  )
}

export default EditGroup