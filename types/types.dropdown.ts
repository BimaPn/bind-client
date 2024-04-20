import { Dispatch, SetStateAction } from "react"

export type DropdownProps = {
    open : boolean,
    setOpen : Dispatch<SetStateAction<boolean>>,
    toggleOpen : () => void 
}