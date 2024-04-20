import { MdOutlinePhotoLibrary } from "react-icons/md"
import { FaUserPlus } from "react-icons/fa"
import { BsEmojiNeutral } from "react-icons/bs"

const postOptions = [
    {
        name : "Photo/video",
        icon : < MdOutlinePhotoLibrary color="#2563eb" style={{ fontSize : 26 }} />
    },
    {
        name : "Tag friends",
        icon : < FaUserPlus color="#00D100" style={{ fontSize : 26 }} />
    },
    {
        name : "Feeling/activity",
        icon : < BsEmojiNeutral color="#D1D100" style={{ fontSize : 26 }}/>
    },
]

export default postOptions