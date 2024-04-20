'use client'
import { ModalBoxProps } from "@/types/types";
import { useEffect } from "react";
import { PiArrowLeft } from "react-icons/pi"

const Modal = ({show,title,children,onClose,className}:ModalBoxProps) => {
    useEffect(() => {
        show == true ? openModal() : closeModal()
        return () => {
            document.body.style.position = '';
        }
    },[show])
    
    const openModal = () => {        
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.left = `0px`;
        document.body.style.right = `0px`;
    }

    const closeModal = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = ``;
        document.body.style.right = ``;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        onClose()
    }
    const buttonClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        closeModal()
    }
  return show && (
    <div 
    onClick={buttonClick}
    className='flexCenter fixed bg-black/25 dark:bg-black/60 inset-0 z-[6000]'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[662px] sm:!max-h-[90%] flex flex-col bg-light dark:bg-d_semiDark ss:rounded-xl z-[997] ${className}`}>
            {/* header */}
            <div className="top-0 left-0 right-0 flex items-center gap-4 text-dark dark:text-d_light py-3 px-4">
                <button onClick={buttonClick}>
                    < PiArrowLeft className="text-2xl" />
                </button>
                <span className="font-medium text-xl">{title}</span>
            </div>
            {children}
        </div>
    </div>
  )
}

const Body = ({children,className}:{children:React.ReactNode,className ?: string}) => {
    return (
        <div className={`overflow-auto sm:max-h-full ${className}`}>
            {children}
        </div>
    )
}

const Footer = ({children,className}:{children:React.ReactNode,className ?: string}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

Modal.Body = Body
Modal.Footer = Footer
export default Modal