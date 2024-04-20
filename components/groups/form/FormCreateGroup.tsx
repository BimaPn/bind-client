'use client'
import {useEffect, useState} from 'react'
import ImageInput from '../../ui/ImageInput'
import TextArea from '../../ui/TextArea'
import ApiClient from '@/app/api/axios/ApiClient'
import { GroupErrorsProps } from '@/types/group'
import InputError from '../../ui/InputError'
import { useRouter } from 'next/navigation'

const FormCreateGroup = () => {
  const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
  const [errors,setErrors] = useState<GroupErrorsProps>()
  const router = useRouter()
  const [formData,setFormData] = useState({
    group_picture : null,
    name : '',
    description : '',
  })

  useEffect(()=>{
    if(formData.name && formData.description) {
        setIsDisableBtn(false)
    }else {
        setIsDisableBtn(true)
    }
  },[formData])

  const formSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    setIsDisableBtn(true)
    ApiClient.post(`/api/group/create`,formData,{  headers: {
      "Content-Type": "multipart/form-data",
    },})
    .then((res) => {
      const groupId = res.data.group_id
      router.push(`/groups/${groupId}`)
    })
    .catch((error) => {
      setIsDisableBtn(false)
      setErrors(error.response.data.errors)
    })
  }
  return (
    <form onSubmit={formSubmit} className='flex flex-col'>
    < ImageInput 
    defaultImage='/images/group/default.jpg'
    onChange={(file) => setFormData((prev) => ({...prev,group_picture : file}))}
    imageRatio='2.35/1' />
    < InputError message={errors?.group_picture && errors.group_picture[0]} />
    <div className='flex flex-col gap-4 mt-4 px-4'>
        <div>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border pl-2 py-2 rounded-xl focus:outline-none"
            type="text"
            placeholder="Name" />
            < InputError message={errors?.name && errors.name[0]} />
        </div>
        <div>
            < TextArea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({...prev,description : e.target.value}))}
            placeholder="Description"
            className='min-h-[36px] pl-2 rounded-xl' />
            < InputError message={errors?.description && errors.description[0]} />
        </div>
        <div className="flex items-center justify-end px-4 h-16 bg-white">
            <button 
            disabled={isDisableBtn} 
            className="px-8 py-2 bg-dark text-light font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed">
                Create
            </button>
        </div>
    </div>
    </form>
  )
}

export default FormCreateGroup