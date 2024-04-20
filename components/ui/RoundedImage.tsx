import { RoundedImageProps } from "@/types/types"
import Image from "next/image"

const RoundedImage = ({src,className,alt}:RoundedImageProps) => {
  return (
    <div className={`relative w-11 h-fit aspect-square rounded-full overflow-hidden ${className}`}>
        < Image 
        src={src} 
        alt={alt}
        fill
        style={{objectFit:"cover"}}
        />
    </div>
  )
}

export default RoundedImage