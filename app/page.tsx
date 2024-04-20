import MainLayout from '@/layouts/MainLayout'
import CreatePost from '@/components/posts/CreatePost'
import MainContent from '@/components/home/MainContent'


const page = () => {

  return (
    <MainLayout navbarMobile={false}>
      <div className='hidden ss:block'>
        < CreatePost />
      </div>
      < MainContent/>
    </MainLayout>
  )
}

export default page