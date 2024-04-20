import Navigation from "./Navigation"


const Sidebar = async ({user}:{user:any}) => {
  return (
    <aside className="bg-light dark:bg-d_semiDark rounded-xl px-2 py-2 sm:shadow">
        < Navigation username={user.username as string} className="flex-col gap-1 justify-center"/>
    </aside>
  )
}   

export default Sidebar