'use client'
import InputLabel from '@/components/ui/InputLabel'
import TextInput from '@/components/ui/TextInput'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import InputError from '@/components/ui/InputError'

const LoginForm = () => {
  const [data,setData] = useState({
    email:'',
    password:'',
})
const [errors,setErrors] = useState<string | null>(null)
const router = useRouter();
const formSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    signIn('credentials',{...data,redirect : false})
    .then((callback) => {
        if(callback?.error){
            setErrors(callback.error)
        }
        if(callback?.ok && !callback.error){
            router.push("/")
        }
    })
  }
  return (
    <form onSubmit={formSubmit}>
    <InputError message={errors && errors} className="mb-2" />
    <div className='w-full flex flex-col gap-4'>
        <div className='relative'>
          <TextInput
          type='email'
          id='email' 
          value={data.email}
          onChange={(e) => setData({...data,email:e.target.value})}
          className='bg-transparent'
          required/>
          <InputLabel forInput='email' value='Email' />
        </div>
      <div className='relative'>
        <TextInput
        type='password'
        id='password'
        value={data.password}
        onChange={(e) => setData({...data,password:e.target.value})}
        className='bg-transparent'
        required />
        <InputLabel forInput='password' value='Password' />
      </div>
    </div>
    <button className='w-full bg-dark text-light dark:bg-light dark:text-dark font-medium rounded-full py-2 my-4'>
      Login
    </button>
  </form>
  )
}

export default LoginForm