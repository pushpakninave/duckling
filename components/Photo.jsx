"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

function Photo() {
    return (
        <div className='w-full h-full relative flex items-center justify-center'>
            {/* image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
                }}
                className="relative"
            >
                <div className="w-[200px] h-[200px] md:w-[298px] md:h-[298px] xl:w-[280px] xl:h-[280px]">
                    <Image src="/assets/images/profile_image.png" priority quality={100} fill alt='profile picture' className='object-contain rounded-full overflow-hidden'
                    />
                </div>
            </motion.div>

            {/* circle */}
            <motion.svg className="w-[220px] h-[220px] md:w-[318px] md:h-[318px] xl:w-[300px] xl:h-[300px] absolute"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
                }}>
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fill="none"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
        </div>
    )
}

export default Photo