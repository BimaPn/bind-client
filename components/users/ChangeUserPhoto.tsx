'use client'
import Image from "next/image"
import { useRef, useState, } from "react"

const ChangeUserPhoto = ({defaultPhoto,className,onChange} : {defaultPhoto : string,className ?: string,onChange?:(file:any) => void}) => {
    const fileInput = useRef<HTMLInputElement>(null)
    const [photoPreview,setPhotoPreview] = useState<string>(defaultPhoto)
    const changePhoto = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const selectedFile = fileInput.current!.files![0];
        if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile);
          if(onChange) {
            onChange(selectedFile)
          }
          setPhotoPreview(blob)
        }
    }
    const openFile = (e:React.MouseEvent) => {
        e.preventDefault()
        fileInput.current?.click()
    }
  return (
    <div className={` ${className}`}>
    <Image
    src={photoPreview}
    fill
    objectFit="cover"
    alt="profile picture"
    />
    <input ref={fileInput} type="file" accept="image/*" onChange={changePhoto} className="hidden" />
    <button onClick={openFile} className="absolute bg-black/50 text-sm text-light py-[6px] px-4 rounded-full">
        Change
    </button>
</div>
  )
}

export default ChangeUserPhoto