'use client'
import { useEffect,useContext,useState } from 'react'
import TextArea from '@/components/ui/TextArea'
import ImagesInput from '@/components/ui/form/ImagesInput'
import React from 'react'
import { BsEmojiNeutral } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { HiGif } from 'react-icons/hi2'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { postContext } from '@/components/providers/PostContext'
import { PostMediaProps, PostUpdateProps, PostsContextProps } from '@/types/post'
import ApiClient from '@/app/api/axios/ApiClient'

const FormUpdatePost = ({postId,caption,mediaOld,onClose}:
{postId:string | number,caption?:string,mediaOld?:PostMediaProps[],onClose : () => void}) => {

    const { updatePost } = useContext(postContext) as PostsContextProps
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const [formData,setFormData] = useState<PostUpdateProps>({
        caption : caption,
        media_new : [],
        media_delete_id : [],
        _method : 'PUT'
    })

    useEffect(() => {
        if((formData.caption == '' && formData.media_new!.length == 0)  ){
            setIsDisableBtn(true)
        }else{
            setIsDisableBtn(false)
        }
    },[formData])

    const addRemoveImage = (id:string | number) => {
        setFormData((prev) => {
            prev.media_delete_id = [...prev.media_delete_id,id]
            return prev
        })
    }
    const formSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setIsDisableBtn(true)
        console.log(formData)
        ApiClient.post(`/api/post/${postId}/update`,formData,{  headers: {
            "Content-Type": "multipart/form-data",
        },})
        .then((res) => {
            setFormData({caption:'',media_new:[],media_delete_id:[]})
            updatePost(res.data.post)
            onClose()
        })
    }
  return (
    <form className='flex flex-col' onSubmit={formSubmit}>
    <div className='max-h-96 overflow-y-auto py-2'>
        < TextArea
        value={formData.caption}
        rows={1}
        onChange={(e) => setFormData({...formData,caption:e.target.value})}
        placeholder="What's going on ?"
        className='text-xl !border-0' />
    </div>
    <ImagesInput 
    value={formData.media_new as File[]}
    onChange={(files:any) => setFormData({...formData,media_new:files})}
    className='flex flex-col gap-3' 
    >
        < ImagesInput.Preview>
        {mediaOld && (
            <ImagesInput.EditOldImages 
            images={mediaOld} 
            onRemove={(id) => addRemoveImage(id)}/>
        )}
        </ImagesInput.Preview>
        <div className='flexBetween border-t pt-[6px]'>
            <div className='flex items-center gap-3'>
                <ImagesInput.Trigger>
                    <div className='flexCenter aspect-square rounded-full px-2 py-2'>
                        < MdOutlinePhotoLibrary color="#2563eb" style={{ fontSize : 26 }} />
                    </div>
                </ImagesInput.Trigger>
                <div className='flexCenter px-2 py-2 aspect-square rounded-full flexCenter'>
                    < FaUserPlus color="#00D100" style={{ fontSize : 26 }} />
                </div>
                <div className='flexCenter px-2 py-2 aspect-square rounded-full flexCenter'>
                    < HiGif className='text-gray-500' style={{ fontSize : 30 }}/>
                </div>
                <div className='flexCenter px-2 py-2 aspect-square rounded-full flexCenter'>
                    < BsEmojiNeutral color="#D1D100" style={{ fontSize : 24 }}/>
                </div>
            </div>
            <button
            disabled={isDisableBtn}
            className='px-6 py-[6px] rounded-full bg-light text-dark font-medium hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed'
            type='submit'
            >
            Update
            </button>
        </div>
    </ImagesInput>
    </form>
  )
}

export default FormUpdatePost