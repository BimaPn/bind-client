import { ButtonProps } from '@/types/types'

const Logout = ({children,...props}:ButtonProps & {children : React.ReactNode}) => {
  return (
    <button
    {...props}>
        {children}
    </button>
  )
}

export default Logout