import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import SidebarSecond from '@/components/ui/SidebarSecond'
import { MainLayoutProps } from '@/types/types'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Navigation from '@/components/ui/Navigation'

const MainLayout = async ({children,navbarMobile = true, disabledDiscover=false, className}:MainLayoutProps) => {
  const session = await getServerSession(authOptions)
  return (
    <>
    <header>
      <Navbar className={`${navbarMobile && '!hidden ss:!flex'}`} />
      <div className='block sm:hidden bg-light dark:bg-d_semiDark fixed bottom-0 right-0 left-0 py-1 border-t dark:border-d_netral z-[990]'>
        <Navigation
        userId={session?.user.id as string} 
        username={session?.user.string as string} 
        className="items-center justify-evenly w-full"
        />
      </div>
    </header>
    <main className='flex justify-center min-h-screen px-0 sm:px-5'>
      <div
       className={
         `w-full ss:w-[90%] md:w-[1440px] grid grid-cols-1 sm:grid-cols-[.1fr_3fr]
         ${!disabledDiscover ? "md:grid-cols-[.1fr_3fr_1fr] lg:grid-cols-[.8fr_2.5fr_1fr]"
         : "md:grid-cols-[.1fr_4fr] lg:grid-cols-[.8fr_3.5fr]"} gap-3 sm:gap-6 relative`}>
        <Sidebar user={session?.user} />
        <div className={`flex justify-start md:justify-center mt-12 mb-14 ss:!my-[72px] ${navbarMobile && '!mt-0'}`}>
          <div className={`w-full md:w-[90%] ${className}`}>
           {children}
          </div>
        </div>

        {!disabledDiscover && (
          <div className='h-fit sticky top-[72px] md:block hidden'> 
            <SidebarSecond />
          </div>
        )}
      </div>
    </main>
    </>
  )
}

export default MainLayout
