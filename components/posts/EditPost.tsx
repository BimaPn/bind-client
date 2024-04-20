'use client'
import { useEffect, useState } from 'react'
import Modal from '../ui/Modal'

const EditPost = ({children,className}:{children:React.ReactNode,className?:string}) => {
  const [isOpen,setIsOpen] = useState<boolean>(false)

  const buttonClick = (e:React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }
  return (
    <>
    <button onClick={buttonClick} className={className}>
        {children}
    </button>

    <Modal 
    onClose={() => setIsOpen(false)} 
    show={isOpen}
    title='Edit post'>
        <Modal.Body>
            <h1>halo bro</h1>
        </Modal.Body>
    </Modal>

    </>
  )
}

export default EditPost