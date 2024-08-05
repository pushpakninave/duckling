import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="mt-4 mx-2 md:mx-10 xl:mx-10 lg:mx-10 flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:mb-7">
          {/* text */}
          <div className="text-start xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">Hi, my name is</span>
            <h1 className="text-3xl text-white lg:text-4xl md:text-4xl xl:text-6xl font-extrabold mt-4 mb-4">
              <span>Pushpak Ninave.</span>
            </h1>
            <h1 className="text-3xl lg:text-4xl md:text-4xl xl:text-6xl font-extrabold mb-6 text-white/60">
              <span className="tracking-tighter">I build things for the web.</span>
            </h1>
            <p className="mt-9 mb-9 text-white/70 max-w-[540px] text-[12px] md:text-base lg:text-base xl:text-base">
              I’m a software engineer specializing in building applications. Currently, I’m focused on building accessible, human-centered products at a SaaS firm.
            </p>
            {/* <Stats/> */}
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-20">
              <a href="/assets/dnfile/Pushpak_FResume.pdf" download="pushpakninave_resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 mt-5 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* hr tag */}
          <div className="hidden absolute gap-2 right-0 xl:flex flex-row justify-center items-center transform rotate-90">
            <p className="text-white/60 text-[12px]">pushpakninave.jee@gmail.com</p>
            <hr className="w-[30vh] border-accent/60 border-[1px]" />
          </div>
          {/* photo */}
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> */}
        </div>
      </div>

    </section>
  )
}
