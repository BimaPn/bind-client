import { FiSearch } from 'react-icons/fi'

const Search = ({className}:{className ?: string}) => {
  return (
    <div className={className}>
        <div className='bg-semiLight dark:bg-d_netral flexCenter rounded-full pr-2 pl-4'>
            <input type="text" className='w-full bg-transparent py-2 focus:outline-none dark:text-d_light placeholder:text-semiDark placeholder:dark:text-d_semiLight' placeholder='Search Bind'/>
            < FiSearch className='w-10 aspect-square text-xl text-dark dark:text-d_semiLight' />
        </div>
    </div>
  )
}

export default Search