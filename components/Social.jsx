import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaCodeBranch } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const socials = [
    {icon:<FaGithub/>, path: 'https://github.com/pushpakninave'},
    {icon:<FaLinkedin/>, path: 'https://www.linkedin.com/in/pushpak-ninave-a17328192/'},
    {icon:<FaTwitter/>, path: 'https://x.com/PushpakN007'},
    {icon:<SiLeetcode/>, path: 'https://leetcode.com/u/BingusCat/'},
]
function Social({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            ) 
        })}
    </div>
  )
}

export default Social