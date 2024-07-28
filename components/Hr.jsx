'use client'
import { motion } from 'framer-motion'

function Hr() {
    return (
        <div>
            <div className='hidden  md:hidden xs:hidden lg:hidden xl:flex'>
                <motion.div
                    initial={{ opacity: 0.2, width: 100 }}
                    animate={{
                        opacity: 1,
                        width: 700,
                        transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
                    }}>
                    <hr className="fade-in flex-1 h-[1px] mx-3 my-4 w-700 sm:w-200 md:w-400 xl:w-700 bg-accent/70 border-0 rounded" />
                </motion.div>
            </div>
            <div className='hidden xl:hidden lg:hidden xs:hidden md:flex'>
                <motion.div
                    initial={{ opacity: 0.2, width: 100 }}
                    animate={{
                        opacity: 1,
                        width: 300,
                        transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
                    }}>
                    <hr className="fade-in flex-1 h-[1px] mx-3 my-4 w-700 sm:w-200 md:w-400 xl:w-700 bg-accent/70 border-0 rounded" />
                </motion.div>
            </div>
            <div className='hidden xl:hidden md:hidden xs:hidden lg:flex'>
                <motion.div
                    initial={{ opacity: 0.2, width: 100 }}
                    animate={{
                        opacity: 1,
                        width: 500,
                        transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
                    }}>
                    <hr className="fade-in flex-1 h-[1px] mx-3 my-4 w-700 sm:w-200 md:w-400 xl:w-700 bg-accent/70 border-0 rounded" />
                </motion.div>
            </div>
            <div className='xl:hidden md:hidden lg:hidden sm:flex'>
                <motion.div
                    initial={{ opacity: 0.2, width: 100 }}
                    animate={{
                        opacity: 1,
                        width: 50,
                        transition: { delay: 0.5, duration: 0.8, ease: "easeIn" }
                    }}>
                    <hr className="fade-in flex-1 h-[1px] mx-3 my-4 w-700 sm:w-200 md:w-400 xl:w-700 bg-accent/70 border-0 rounded" />
                </motion.div>
            </div>
        </div>
    )
}

export default Hr