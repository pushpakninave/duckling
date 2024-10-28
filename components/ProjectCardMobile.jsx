import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { RiBroadcastFill } from "react-icons/ri";
import Link from "next/link"
import Image from 'next/image';
import { motion } from "framer-motion";

function ProjectCardMobile({ projectInfo, index }) {
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
            <div className='container h-[45vh] w-[100vw]'>
                <div className='relative'>
                    <div className='projectImage  rounded-md group-hover:scale-[1.05] bg-opacity-50 transition ease-in duration-200'>
                        <div className='w-full h-full'>
                            <img
                                className='rounded-md h-[39vh] opacity-30'
                                src={projectInfo.imageUrl}

                                alt="Project Image" />
                        </div>
                    </div>
                    <div className='flex flex-col h-full justify-evenly absolute inset-0 bg-slate-900 bg-opacity-70 rounded-md mx-5 p-5'>
                        <h2 className='font-bold'>{projectInfo.projectName}.</h2>
                        <p className='text-xs'>{truncateText(projectInfo.description, 100)}</p>
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

            </div>
        </motion.div>
    )
}

export default ProjectCardMobile