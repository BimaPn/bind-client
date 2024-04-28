import { FiSearch } from "react-icons/fi"

const SearchGroup = ({className} : {className ?:string}) => {
  return (
    <div className={className}>
        <div className='bg-semiLight dark:bg-d_netral flexCenter rounded-full pr-3 pl-4'>
            <input type="text" className='w-full bg-transparent py-[6px] ss:py-2 focus:outline-none placeholder:text-semiDark dark:placeholder:text-d_semiLight' placeholder='Search group'/>
            < FiSearch className='w-6 aspect-square text-lg text-dark dark:text-d_semiLight' />
        </div>
    </div>
  )
}

export default SearchGroup
