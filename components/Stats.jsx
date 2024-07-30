"use client"

import CountUp from "react-countup"


const stats = [
    {
        num:1,
        text:"year of Exp"
    },
    {
        num:8,
        text:"Projects Completed"
    },
    {
        num: 14,
        text:"Skills"
    },
    {
        num:200,
        text:"Code Commits"
    }
]
function Stats() {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=>{
                    return(
                        <div key={index} className="flex-1 flex gap-4 items-center justify-start xl:justify-center">
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-5xl font-extrabold"/>
                            <p className={`${item.text.length < 15 ? "mx-w-[100px]" : "mx-w-[15px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats