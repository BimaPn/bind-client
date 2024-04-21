export type MainLayoutProps = {
    children : React.ReactNode
    navbarMobile ?: boolean
    className ?: string
    disabledDiscover?: boolean
}
export type BoxSectionProps = {
    children : React.ReactNode,
    className ?: string,
    parentClass?:string,
    sectionColor?:string
}

export type UserItemProps = {
    name : string,
    username : string,
    image : string,
    verified : boolean
}
export type ModalBoxProps = {
    show : boolean,
    children : React.ReactNode,
    title : string,
    onClose : ()=>void,
    className ?: string
} 

export type ModalContextProps = {
    setOpenModal  : Dispatch<SetStateAction<boolean>>
}

export type RoundedImageProps = {
    src : string,
    className ?: string,
    alt :string
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    placeholder ?: string
}
export type InputImageProps = {
    defaultImage:string,
    onChange : (file:any)=>void,
    imageRatio ?: string
    className?:string,
}
