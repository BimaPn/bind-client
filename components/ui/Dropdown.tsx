'use client'
import {useState,useContext,createContext} from 'react'
import { DropdownProps } from '@/types/types.dropdown'

export const dropDownContext = createContext<DropdownProps | null>(null)

const Dropdown = ({children}:{children : React.ReactNode}) => {
    const [open,setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev)
    }
  return (
    <dropDownContext.Provider value={{ open,setOpen, toggleOpen}}>
        <div className='relative'>
            {children}
        </div>
    </dropDownContext.Provider>
  )
}

const Trigger = ({children}:{children : React.ReactNode}) => {
    const { open,setOpen,toggleOpen } = useContext(dropDownContext) as DropdownProps
    return (
        <>
            <div onClick={toggleOpen}>{children}</div>
            {open && <div className='fixed inset-0 z-[990]' onClick={() => setOpen(false)}></div>}
        </>
    )
}

const Content = ({children, showFromBottom=true, className}:{children : React.ReactNode, showFromBottom?: boolean, className ?: string}) => {
    const { open,setOpen } = useContext(dropDownContext) as DropdownProps
    return open && (
        <div
        onClick={() => setOpen(prev => !prev)}
        className={`absolute mt-2 ${showFromBottom && 'top-full'} z-[994] ${className}`}>
            {children}
        </div>
    )
} 
Dropdown.Trigger = Trigger
Dropdown.Content = Content
export default Dropdown
