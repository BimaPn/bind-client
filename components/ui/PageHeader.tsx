import { PiArrowLeft } from "react-icons/pi"

type PageHeaderProps = {
    title : string,
    children ?: React.ReactNode,
    className ?: string
}

const PageHeader = ({title,children,className}:PageHeaderProps) => {
  return (
    <>
    <div className={`ss:hidden block sticky top-0 left-0 right-0 bg-light dark:bg-d_semiDark text-dark dark:text-d_light py-3 px-4 flexBetween rounded-none sm:rounded-t-xl z-[995] ${className}`}>
        <div className="flex items-center gap-4">
            <button>
                < PiArrowLeft className="text-[22px]" />
            </button>
            <span className="text-lg font-semibold">
                {title}
            </span>
        </div>
        <div>
            {children}
        </div>
    </div>
    <div className="hidden ss:block px-2 ss:px-4 pt-4 pb-3"> 
        <h1 className='font-semibold text-xl hidden xs:block'>Notifications</h1>
    </div>
    </>

  )
}

export default PageHeader
