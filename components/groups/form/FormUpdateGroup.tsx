'use client'
import ApiClient from '@/app/api/axios/ApiClient'
import { groupContext } from '@/components/providers/GroupContext'
import ImageInput from '@/components/ui/ImageInput'
import InputError from '@/components/ui/InputError'
import TextArea from '@/components/ui/TextArea'
import { GroupContextProps, GroupErrorsProps, UpdateGroupProps } from '@/types/group'
import {useState,useEffect, useContext} from 'react'

const FormUpdateGroup = ({groupId,defaultPicture,defaultName,defaultDesc,onClose}:UpdateGroupProps & {onClose : ()=>void}) => {
  const { setGroup } = useContext(groupContext) as GroupContextProps
  const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
  const [errors,setErrors] = useState<GroupErrorsProps>()
  const [formData,setFormData] = useState({
    name : defaultName,
    description : defaultDesc,
    group_picture : null,
    _method : 'PUT'
  })
  useEffect(() => {
    if(formData.name != defaultName || formData.description != defaultDesc ||
    formData.group_picture) {
        setIsDisableBtn(false)
    }else{
        setIsDisableBtn(true)
    }
},[formData])

  const formSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    setIsDisableBtn(true)
    ApiClient.post(`/api/group/${groupId}/update`,formData,{  headers: {
      "Content-Type": "multipart/form-data",
    },})
    .then((res) => {
      setIsDisableBtn(false)
      setGroup(res.data.group)
      onClose()
    })
    .catch((error) => {
      setIsDisableBtn(false)
      setErrors(error.response.data.errors)
    })
  }
  return (
    <form onSubmit={formSubmit} className='min-h-full flex flex-col sm:shadow pb-4 sm:rounded-b-xl'>
    < ImageInput 
    defaultImage={defaultPicture}
    onChange={(file) => setFormData((prev) => ({...prev,group_picture : file}))}
    imageRatio='2.35/1' />
    < InputError message={errors?.group_picture && errors.group_picture[0]} />
        <div className='mt-4 mb-4 px-4'>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border pl-2 py-2 rounded-xl focus:outline-none dark:border-0"
            type="text"
            placeholder="Name" />
            < InputError message={errors?.name && errors.name[0]} />
        </div>
        <div className='overflow-y-auto max-h-full mb-4 px-4'>
            < TextArea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({...prev,description : e.target.value}))}
            placeholder="Description"
            className='min-h-[36px] pl-2 rounded-xl dark:!border-0' />
            < InputError message={errors?.description && errors.description[0]} />
        </div>
        <div className="flex items-center justify-end px-4">
            <button 
            disabled={isDisableBtn} 
            className="px-8 py-2 bg-semiLight dark:bg-light text-dark font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed">
                Save
            </button>
        </div>
    </form>
  )
}

export default FormUpdateGroup