import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { RiBroadcastFill } from "react-icons/ri";
import Link from "next/link"
import Image from 'next/image';
import { motion } from "framer-motion";

function ProjectCard({ projectInfo, index }) {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
            }}
            className=""
        >
            <div className='container cursor-pointer w-[55vw] md:w-[70vw] h-[60vh] flex items-center justify-between relative group'>
                <div className='projectImage relative h-[80%] w-[60%] rounded-md group-hover:scale-[1.05] bg-opacity-50 transition ease-in duration-200'>
                    <div>
                        <Image
                            className='rounded-md bg-black'
                            src={projectInfo.imageUrl}
                            layout="fill"
                            sizes={100}
                            alt="Project Image" />
                    </div>
                    <div className='absolute inset-0 bg-slate-600 bg-opacity-50 hover:bg-opacity-0 hover:cursor-pointer transition-opacity rounded-md duration-1000 ease-out group-hover:opacity-0'></div>

                </div>
                <div className='projectInfo absolute left-[10%] md:left-[30%] w-[50%] group-hover:scale-[1.07] transition ease-in bg-slate-900 duration-150 p-5 shadow-lg'>
                    <p className='text-xs'>{projectInfo.description}</p>
                    <div className='flex flex-row justify-end'>
                        <Link href={projectInfo.githubLink} target='_blank' className='items-center text-accent/50 text-base hover:text-accent hover:transition-all  duration-500'>
                            <FaExternalLinkSquareAlt className='m-2 text-xl' />
                        </Link>
                        {projectInfo.liveLink &&
                            (
                                <Link href={projectInfo.liveLink} target='_blank' className='items-center text-accent bg-none hover:transition-all hover:scale-105 duration-500 animate-glow'>
                                    <RiBroadcastFill className='m-2 text-xl' />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard