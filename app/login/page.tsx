import {FcGoogle} from 'react-icons/fc'
import Link from 'next/link'
import LoginForm from './LoginForm'

const page = () => {
  return (
    <div className='h-screen flexCenter'>
        <div className='w-96 bg-light dark:bg-d_semiDark flex flex-col sm:shadow-lg sm:rounded-xl px-10 py-5'>
            <h1 className='text-gray-400 dark:text-d_light text-center text-xl mb-4'>Login to Bind</h1>
            < LoginForm />
            <div className='relative flexCenter border-t border-gray-300 dark:border-d_netral my-2'>
              <span className='absolute text-sm block bg-light dark:bg-d_semiDark text-gray-400 dark:text-d_semiLight font-medium px-4 py-1'>Or</span>
            </div>

              <button className='flexCenter border border-gray-300 dark:border-d_netral rounded-full py-2 my-3'>
                < FcGoogle className='w-10 text-2xl'  />
                <span className='text-sm font-medium text-semiDark dark:text-d_semiLight'>Login with Google</span>
              </button>

            <div className='flexCenter mt-2'>
              <span className='text-sm text-semiDark dark:text-d_semiLight'>
                Dont have an account ? <Link className='font-medium text-dark dark:text-d_light' href={`/register`}>Register</Link> 
              </span>
            </div>
        </div>
    </div>
  )
}

export default page