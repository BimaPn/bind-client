import {InputHTMLAttributes} from 'react'

const TextInput = ({className,...props}:InputHTMLAttributes<HTMLInputElement> & {className ?:string}) => {
  return (
    <input
    placeholder=' '
    className={`w-full block border border-gray-300 dark:border-d_netral rounded-lg py-2 px-4 focus:ring-0 peer ${className}`} 
    {...props}/>
  )
}

export default TextInput