'use client'
import { ImagesInputContextProps } from '@/types/form'
import {useState,createContext,useContext,useEffect,useRef, ChangeEvent, ButtonHTMLAttributes} from 'react'
import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { InputImagesProps } from '@/types/form'
import { PostMediaProps } from '@/types/post'
const imagesInputContext = createContext<ImagesInputContextProps | null>(null)

const ImagesInput = ({children,value,className,onChange}:InputImagesProps) => {
    const [imagePreviews,setImagePreviews] = useState<string[]>()

    useEffect(() =>{
        renderImages(value)
    },[value])

    
    const renderImages = (imageFiles : File[]) => {
        let _imagePreviews = Array.from(imageFiles).map(file => URL.createObjectURL(file))
        setImagePreviews(_imagePreviews)
    }
    const removeImage = (index:number) => {
        onChange(value.filter(image => value.indexOf(image) !== index))
    }
  return (
    <imagesInputContext.Provider value={{ value,onChange,removeImage,imagePreviews,setImagePreviews }}>
        <div className={className}>
        {children}
        </div>
    </imagesInputContext.Provider>
  )
}
const Trigger = ({children}:{children : React.ReactNode}) => {
    const { value,onChange } = useContext(imagesInputContext) as ImagesInputContextProps
    const inputRef = useRef<HTMLInputElement>(null)

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (files) {
          const newImages = Array.from(files) as File[];
          onChange([...value, ...newImages]);
        }
    };
  return (
    <button type='button' onClick={() => inputRef.current!.click()}>
        <input 
        type="file" 
        className='hidden' 
        multiple 
        accept="image/*" 
        onChange={onImageChange} 
        ref={inputRef}/>
        {children}
    </button>
  )
}   
const Preview = ({children,className}:{children?:React.ReactNode,className?:string}) => {
    const { imagePreviews,removeImage } = useContext(imagesInputContext) as ImagesInputContextProps
  return imagePreviews && (
    <div className={`grid grid-cols-3 gap-3 ${className}`}>
        {children}

        {imagePreviews.map((image,index) => (
            <>
            < ImagePreview 
            key={index}
            src={image} 
            alt='image' 
            onRemove={() => removeImage(index)}
            className='aspect-square rounded-xl'/>
            </>
        ))}

    </div>
  )
}
const EditOldImages = ({images,onRemove}:{images:PostMediaProps[],onRemove:(id:string | number)=> void}) => {
  const [oldImages,setOldImages] = useState<PostMediaProps[]>(images)
  const deleteOldImage = (id:string | number) => {
    setOldImages((prev)=>{
      return prev.filter(item => item.id != id)
    })
    onRemove(id)
  } 
  return (
    <>
    {oldImages.map((image) => (
      < ImagePreview
      key={image.id}
      src={image.file_path}
      onRemove={() => deleteOldImage(image.id)}
      alt='image' 
      className='aspect-square rounded-xl'/>
    ))}
    </>
  )
}
const ImagePreview = ({src,alt,className,onRemove}:{src:string,alt:string,className?:string,onRemove?:()=> void}) => {
    const imageRemove = (e:React.MouseEvent) => {
        e.preventDefault()
        onRemove && onRemove()
    }
  return(
    <div className={`relative h-fit overflow-hidden ${className}`}>
        < Image
        src={src} 
        alt={alt}
        fill
        style={{objectFit:"cover"}} />
        <div className='absolute top-0 right-0 p-2'>
            <button type='button' onClick={imageRemove} className='text-light px-1 aspect-square rounded-full bg-dark/30'>
            < IoClose className='text-xl' />
            </button>
        </div>
    </div>
  )
}



ImagesInput.Trigger = Trigger
ImagesInput.Preview = Preview
ImagesInput.EditOldImages = EditOldImages
export default ImagesInput