import ApiClient from '@/app/api/axios/ApiClient'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LogoutButton = ({children,className}:{children:React.ReactNode,className?:string}) => {
  const router = useRouter()
    const logout = (e:React.MouseEvent) => {
        e.preventDefault()
        ApiClient.post('/api/auth/logout')
        .then(() => {
            signOut({redirect:false}).then(() => {router.push('/login')})
        })
    }
  return (
    <button
    className={className} 
    onClick={logout}>
        {children}
    </button>
  )
}

export default LogoutButton