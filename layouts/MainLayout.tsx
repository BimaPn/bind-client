import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import SidebarSecond from '@/components/ui/SidebarSecond'
import { MainLayoutProps } from '@/types/types'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Navigation from '@/components/ui/Navigation'

const MainLayout = async ({children,navbarMobile = true, className}:MainLayoutProps) => {
  const session = await getServerSession(authOptions)
  return (
    <>
    <header>
      <Navbar className={`${navbarMobile && '!hidden ss:!flex'}`} />
    </header>
    <main className='flex justify-center min-h-screen px-0 sm:px-5'>
      <div
       className={
         `w-full ss:w-[90%] md:w-[1440px] grid grid-cols-1 sm:grid-cols-[.1fr_3fr]
         md:grid-cols-[.1fr_4fr] lg:grid-cols-[.8fr_3.5fr] gap-3 sm:gap-6 relative`}>
        <Sidebar user={session?.user} />
        
        <div className='flex justify-center gap-6'>
          <div className={`grow flex justify-start md:justify-center mt-12 mb-14 ss:!my-[72px] ${navbarMobile && '!mt-0'}`}>
            <div className={`w-full md:w-[90%] ${className}`}>
             {children}
            </div>
          </div>
          <SidebarSecond />
        </div>
      </div>
    </main>
    </>
  )
}

export default MainLayout
