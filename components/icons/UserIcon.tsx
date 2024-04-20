
const UserIcon = ({width = 19,active=false,className}:{width?:number,active?:boolean,className?:string}) => {
  return (
<svg width={width} className={className} viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 16C17.866 16 21 12.866 21 9C21 5.13401 17.866 2 14 2C10.134 2 7 5.13401 7 9C7 12.866 10.134 16 14 16Z" className={`${active ? 'fill-dark dark:fill-light':'fill-none'} stroke-dark dark:stroke-light `} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 32C26 28.8174 24.7357 25.7652 22.4853 23.5147C20.2348 21.2643 17.1826 20 14 20C10.8174 20 7.76516 21.2643 5.51472 23.5147C3.26428 25.7652 2 28.8174 2 32H26Z" className={`${active ? 'fill-dark dark:fill-light':'fill-none'} stroke-dark dark:stroke-light  `} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

export default UserIcon