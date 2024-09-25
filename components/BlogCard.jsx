"use client"


import React from 'react'
import { getPosts } from "@/lib/requests"
import Image from 'next/image'
import { motion } from 'framer-motion'
import Tags from './Tags';
import { FaForward, FaExternalLinkSquareAlt, FaRegEye } from "react-icons/fa"
import Link from "next/link"




const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};
function BlogCard({ postInfo }) {
    const totalTags = postInfo.tags;
    return (
        <section className='h-[400px] bg-slate-800 rounded-md shadow-custom-navy my-2 mx-20'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
                }}
                className="relative"
            >
                <div className='container mx-auto h-full flex justify-center'>
                    <div className='blogskeleton cursor-pointer mx-10 w-full flex xl:flex-row items-center justify-between xl:pt-8 xl:mb-7 relative group'>
                        <div className='blogimage order-1 xl:order-none mb-8 xl:mb-0 relative '>
                            <div className='h-[300px] w-[500px] overflow-hidden'>
                                <Image className='rounded-md' src={ postInfo.coverImage ? postInfo.coverImage.url : "/assets/images/undraw_post_ahef.svg" } height={500} width={500} layout='responsive' priority alt={postInfo.title} />
                            </div>
                            <div className='absolute inset-0 bg-slate-600 bg-opacity-50 hover:bg-opacity-0 hover:cursor-pointer transition-opacity duration-1000 ease-in group-hover:opacity-0'></div>
                        </div>
                        <div className='bloginfo text-center xl:text-left order-2 xl:order-none absolute left-[30%] w-[70%] inset-0 flex flex-col justify-center items-end bg-opacity-50 p-5 z-10'>
                            <h2 className='text-xl font-semibold  relative group'>
                                {truncateText(postInfo.title, 35)}
                                <span className="block absolute left-0 bottom-[-2px] w-0 h-[2px] bg-black transition-all group-hover:w-full group-hover:border-b-2 group-hover:border-accent"></span>
                            </h2>
                            <p className='blogViews mt-2 text-xs flex flex-row items-center group-hover:text-cyan-500 '>{postInfo.views}<FaRegEye className='mx-2' /></p>
                            <div className='text-sm bg-slate-900 mt-6 p-5 border-l-2 border-b-2 rounded-sm shadow-custom-navy border-accent transform transition-transform duration-700 ease-out group-hover:scale-105'>
                                <p className=''>{truncateText(postInfo.brief, 150)}</p>
                                <div className="mt-5">
                                    <Tags tagInfo={totalTags} />
                                </div>
                                <Link href={postInfo.url} target='_blank' className='items-center text-accent/50 text-base hover:text-accent hover:transition-all hover:scale-105 duration-500'>
                                    <FaExternalLinkSquareAlt className='m-2 text-2xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default BlogCard