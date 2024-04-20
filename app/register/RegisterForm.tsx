'use client'
import InputLabel from "@/components/ui/InputLabel"
import TextInput from "@/components/ui/TextInput"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"
import { RegisterErrorsProps } from "@/types/auth"
import InputError from "@/components/ui/InputError"

const RegisterForm = () => {
    const [data,setData] = useState({
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
  })
  const [errors,setErrors] = useState<RegisterErrorsProps | null>(null)
  const router = useRouter()
  const formSubmit =  (e:React.FormEvent<EventTarget>) => {
      e.preventDefault()

      axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/auth/register`,data)
      .then(() => {
          router.push('/login')
      })
      .catch(error => {
          const validatedErrors = JSON.parse(error.response.data)
          setErrors({...validatedErrors})
      });
    }
  return (
    <form onSubmit={formSubmit}>
    <div className='w-full flex flex-col gap-4'>
      <div>
        <div className='relative'>
          <TextInput
          type='text'
          value={data.name}
          onChange={(e) => setData({...data,name:e.target.value})}
          id='name'
          className="bg-transparent" 
          required/>
          <InputLabel forInput='name' value='Name' />
        </div>
        <InputError message={errors?.name && errors.name[0]} className="mt-1" />
      </div>
      <div>
        <div className='relative'>
          <TextInput
          type='email'
          value={data.email}
          onChange={(e) => setData({...data,email:e.target.value})}
          id='email'
          className="bg-transparent" 
          required/>
          <InputLabel forInput='email' value='Email' />
        </div>
        <InputError message={errors?.email && errors.email[0]} className="mt-1" />
      </div>
      <div>
        <div className='relative'>
          <TextInput
          type='password'
          value={data.password}
          onChange={(e) => setData({...data,password:e.target.value})}
          id='password'
          className="bg-transparent" />
          <InputLabel forInput='password' value='Password' />
        </div>
        <InputError message={errors?.password && errors.password[1]} className="mt-1" />
      </div>
      <div>
        <div className='relative'>
          <TextInput
          type='password'
          value={data.password_confirmation}
          onChange={(e) => setData({...data,password_confirmation:e.target.value})}
          id='password_confirmation'
          className="bg-transparent" />
          <InputLabel forInput='password_confirmation' value='Confirm password' />
        </div>
        <InputError message={errors?.password && errors.password[0]} className="mt-1" />
      </div>
    </div>
    <button type="submit" className='w-full bg-dark text-light dark:bg-light dark:text-dark rounded-full py-2 my-4'>
      Register
    </button>
  </form>
  )
}

export default RegisterForm