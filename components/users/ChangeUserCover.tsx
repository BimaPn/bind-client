'use client'
import Image from "next/image"
import { useRef,useState } from "react"

const ChangeUserCover = ({defaultCover,className,onChange}:{defaultCover:string,className?:string,onChange ?: (file:any)=>void}) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [coverPreview,setcoverPreview] = useState<string>(defaultCover)
  const changeCover = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const selectedFile = fileInput.current!.files![0];
      if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile);
          if(onChange){
            onChange(selectedFile)
          }
          setcoverPreview(blob)
      }
  }
  const openFile = (e:React.MouseEvent) => {
      e.preventDefault()
      fileInput.current?.click()
  }
  return (
    <div className={`relative flexCenter aspect-[3/1] ${className}`}>
    <Image 
    src={coverPreview}
    fill
    objectFit="cover"
    alt="cover photo"/>
    <input ref={fileInput} type="file" accept="image/*"  onChange={changeCover} className="hidden" />
    <button onClick={openFile} className="absolute bg-black/50 text-sm text-light py-[6px] px-4 rounded-full">
        Change
    </button>
</div>
  )
}

export default ChangeUserCover