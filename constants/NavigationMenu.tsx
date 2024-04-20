import { GoHomeFill } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import { LiaUser } from 'react-icons/lia'
import { RiGroupFill, RiGroupLine, RiUser3Fill } from "react-icons/ri"
import { BsBookmarks } from "react-icons/bs"
import { BiSolidUser } from "react-icons/bi"

export const navigation = [
    {
        name : "Home",
        link : "/",
        icon : <GoHomeFill  className="" style={{ fontSize : 28 }} />
    },
    {
        name : "Explore",
        link : "/explore",
        icon : < BsSearch className=" " style={{ fontSize : 25 }} />
    },
    {
        name : "Groups",
        link : "/group",
        icon : < RiGroupFill className=" " style={{ fontSize : 25 }} />
    },
    {
        name : "Bookmarks",
        link : "/bookmarks",
        icon : < BsBookmarks className=" " style={{ fontSize : 25 }} />
    },
    {
        name : "Profile",
        link : "/bookmarks",
        icon : < RiUser3Fill  className="" style={{ fontSize : 28 }} />
    },
]