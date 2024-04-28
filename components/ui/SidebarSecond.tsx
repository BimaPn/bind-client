"use client"
import { usePathname } from "next/navigation"
import SuggestionUsers from "./SuggestionUsers"
import { comparePath } from "@/constants"

const SidebarSecond = () => {
  const path = usePathname()
  return !comparePath(path, "/chat") && (
    <aside className="w-[308px] lg:w-80 h-fit sticky top-[72px] hidden md:flex flex-col gap-4">
      <SuggestionUsers />
    </aside>
  )
}

export default SidebarSecond
