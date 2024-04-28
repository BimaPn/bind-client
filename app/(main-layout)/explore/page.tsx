import ExploreSearch from "@/components/ui/ExploreSearch"

const categories = ["For you","Trending","News","Damn"]
const page = () => {
  return (
    <section className="w-full flex flex-col bg-white rounded-xl shadow px-3 ss:px-4 py-2">
      <ExploreSearch />
      <div className="overflow-auto">
        <div className="flex items-center gap-2">
          {categories.map((item, index) => (
            <button key={index} className={`px-4 py-1 bg-semiLight rounded-lg text-sm ${index === 0 && "!bg-blue-100 text-blue-600 font-semibold"}`}>{item}</button> 
          ))}
        </div>
      </div>

    </section>
  )
}

export default page
