import { PostMediaProps } from '@/types/post'
import Image from 'next/image'

const PostMedia = ({media}:{media : PostMediaProps[]}) => {
  return (
    <>
    {media.length == 1 && (
    <div className="rounded-xl overflow-hidden">
        <Image src={media[0].file_path}
        width={700} height={700}
        className="w-full h-auto"
        alt="post picture"
        />
    </div>
    )}
    {media.length == 3 && (
        <div className="aspect-square grid grid-rows-2 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={item.id} className={`relative h-full rounded-xl overflow-hidden ${index == 0 && 'row-span-2'}`}>
                    < Image 
                    src={item.file_path} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
    {media.length == 2 && (
        <div className="aspect-square grid grid-rows-1 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={item.id} className={`relative h-full rounded-xl overflow-hidden`}>
                    < Image 
                    src={item.file_path} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
    {media.length == 4 && (
        <div className="aspect-square grid grid-rows-2 grid-cols-2 gap-2" >
            {media.map((item,index) => (
                <div key={item.id} className={`relative h-full rounded-xl overflow-hidden`}>
                    < Image 
                    src={item.file_path} 
                    alt={"image"}
                    fill
                    className='w-full h-auto'
                    style={{objectFit:"cover"}}
                    />
                </div>
            ))}
        </div>
        )}
        
    </>

  )
}

export default PostMedia