'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import TempAppIcon from "../icons/TempAppIcon"

const ApplicationLogo = () => {
  const router = useRouter()
  return (
    <Link className="flex item-center justify-start" href={`/`}  >
        <TempAppIcon />
    </Link>
  )
}

export default ApplicationLogo