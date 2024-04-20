'use client'
import { useState } from "react"
import Modal from "../ui/Modal"
import FormUpdateUser from "./form/FormUpdateUser"
import { UserProfileProps } from "@/types/user"



const EditProfile = ({username,profile_picture,cover_photo,name,bio,className}:
    Pick<UserProfileProps,'username'|'profile_picture'|'cover_photo'|'name'|'bio'>&{className?:string}) => {
    const [isOpenModal,setIsOpenModal] = useState<boolean>(false)
  return (
    <>
        <button 
        onClick={() => setIsOpenModal(prev => !prev)} 
        className={`bg-semiLight dark:bg-d_netral text-dark dark:text-light font-medium px-5 py-2 rounded-full ${className}`}>
            Edit Profile
        </button>

            <Modal 
            title="Edit Profile"
            show={isOpenModal} 
            onClose={() => setIsOpenModal(false)}
            className="h-screen sm:!h-fit">
              <Modal.Body className="ss:rounded-b-xl rounded-none">
                < FormUpdateUser
                username={username}
                defaultName={name}
                defaultBio={bio}
                defaultProfilePic={profile_picture}
                defaultCover={cover_photo}
                onClose={() => setIsOpenModal(false)} />
              </Modal.Body>
            </Modal>
    </>
  )
}

export default EditProfile