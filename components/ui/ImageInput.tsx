'use client'
import { InputImageProps } from "@/types/types";
import Image from "next/image"
import { useRef,useState } from "react"

const ImageInput = ({defaultImage,className,onChange,imageRatio = "3/1"}:InputImageProps) => {
  let aspectRatio;
  if(imageRatio === "3/1"){
    aspectRatio = "aspect-[3/1]";
  }else if(imageRatio == "2.35/1"){
    aspectRatio = "aspect-[2.35/1]"
  }else if(imageRatio == "square"){
    aspectRatio = "aspect-square"
  }
  const fileInput = useRef<HTMLInputElement>(null)
  const [imagePreview,setImagePreview] = useState<string>(defaultImage)
  const changeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const selectedFile = fileInput.current!.files![0];
      if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile);
          if(onChange){
            onChange(selectedFile)
          }
          setImagePreview(blob)
      }
  }
  const openFile = (e:React.MouseEvent) => {
      e.preventDefault()
      fileInput.current?.click()
  }
  return (
    <div className={`relative flexCenter ${aspectRatio} ${className}`}>
        <Image 
        src={imagePreview}
        fill
        objectFit="cover"
        alt="cover photo"/>
        <input ref={fileInput} type="file" accept="image/*"  onChange={changeImage} className="hidden" />
        <button onClick={openFile} className="absolute bg-black/50 text-sm text-light py-[6px] px-4 rounded-full">
            Change
        </button>
    </div>
  )
}

export default ImageInput