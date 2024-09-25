"use client"

import { Card, CardHeader, CardBody } from "@nextui-org/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Tags from './Tags';
import { FaForward, FaExternalLinkSquareAlt, FaRegEye } from "react-icons/fa"
import Link from "next/link"

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};
function MobileBlogCard({ postInfo }) {
    const totalTags = postInfo.tags;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
            }}
            className="relative"
        >       
            <Card className="py-10 px-5 relative bg-transparent bg-slate-900 rounded-xl shadow-custom-navy mb-2 mx-5 md:mx-10 lg:mx-20 overflow-hidden transform transition-transform duration-400 ease-out hover:scale-105">
                    <Image
                        src={postInfo.coverImage ? postInfo.coverImage.url : "/assets/images/undraw_post_ahef.svg"}
                        width={400}
                        height={400}
                        className="absolute inset-0 h-full w-full object-cover opacity-55"
                        alt="post image"
                    />
                    <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm"></div>
                    <CardBody className="relative z-10 py-2 flex flex-col items-start space-y-2 text-white">
                        <h4 className="font-bold text-large text-accent">{truncateText(postInfo.title, 35)}</h4>
                        <p className="text-base">{truncateText(postInfo.brief, 100)}</p>
                        <Tags tagInfo={totalTags} />
                        <Link href={postInfo.url} target='_blank' className='items-center text-accent/50 text-base hover:text-accent hover:transition-all hover:scale-105 duration-500'>
                            <FaExternalLinkSquareAlt className='m-2 text-2xl' />
                        </Link>
                    </CardBody>
            </Card>
        </motion.div>
    )
}

export default MobileBlogCard