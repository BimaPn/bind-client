import {useState,useEffect,useContext} from 'react'
import ImageInput from '@/components/ui/ImageInput'
import InputError from '@/components/ui/InputError';
import TextArea from '@/components/ui/TextArea';
import ApiClient from '@/app/api/axios/ApiClient';
import { UpdateProfileProps, UserProfileContextProps, UserUpdateErrorsProps } from '@/types/user';
import { useSession } from 'next-auth/react';
import { userProfileContext } from '@/components/providers/UserProfileContext';

const FormUpdateUser = ({username,defaultName,defaultBio,defaultProfilePic,defaultCover,onClose}:UpdateProfileProps) => {
    const {data:session,update} = useSession()
    const { setUser } = useContext(userProfileContext) as UserProfileContextProps
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const [errors,setErrors] = useState<UserUpdateErrorsProps>();
    const [formData,setFormData] = useState({
        name : defaultName,
        bio : defaultBio,
        profile_picture : null,
        cover_photo : null,
        _method : 'PUT'
    })

    useEffect(() => {
        if(formData.name != defaultName || formData.bio != defaultBio ||
        formData.profile_picture || formData.cover_photo) {
            setIsDisableBtn(false)
        }else{
            setIsDisableBtn(true)
        }
    },[formData])
    const formSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setIsDisableBtn(true)
        ApiClient.post(`/api/${username}/update`,formData,{  headers: {
            "Content-Type": "multipart/form-data",
          },})
        .then((res) => {
            setUser(res.data.user)
            update({
                ...session,
                user:{
                    ...session?.user,
                    name : res.data.user.name,
                    profile_picture : res.data.user.profile_picture
                }
            })
            onClose()
        })
        .catch((error) => {
            setIsDisableBtn(false)
            setErrors(error.response.data.errors)
        })
    }
  return (
    <form onSubmit={formSubmit} className='min-h-full flex flex-col sm:shadow sm:rounded-b-xl'>
        <div className="relative">
            < ImageInput 
            onChange={(file) => setFormData({...formData,cover_photo : file})}
            defaultImage={defaultCover}  />
            < ImageInput 
            onChange={(file) => setFormData({...formData,profile_picture : file})} 
            imageRatio='square' 
            defaultImage={defaultProfilePic} 
            className="!absolute aspect-square rounded-full overflow-hidden border-light dark:border-d_semiDark border-4 -bottom-16 left-4 w-28 ss:w-32" />
        </div>
        < InputError message={errors?.profile_picture && errors.profile_picture[0]} />
        < InputError message={errors?.cover_photo && errors.cover_photo[0]} />
        <div className='mt-20 mb-4 px-4'>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border dark:border-0 pl-2 py-2 rounded-xl focus:outline-none"
            type="text"
            placeholder="Name" />
            < InputError message={errors?.name && errors.name[0]} />
        </div>
        <div className='overflow-y-auto max-h-full mb-4 px-4'>
            < TextArea
            rows={3}
            value={formData.bio}
            onChange={(e) => setFormData((prev) => ({...prev,bio : e.target.value}))}
            placeholder="Bio"
            className='min-h-[36px] pl-2 rounded-xl dark:!border-0' />
            < InputError message={errors?.bio && errors.bio[0]} />
        </div>
        <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-d_semiDark flex items-center justify-end px-4 py-2">
            <button 
            disabled={isDisableBtn} 
            className="px-8 py-2 bg-light hover:bg-gray-300 font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed text-dark">
                Save
            </button>
        </div>
    </form>
  )
}

export default FormUpdateUser