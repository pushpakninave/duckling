'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { usePathname } from "next/navigation"
import { Label } from "@/components/ui/label"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Pushpak<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Popover>
            <PopoverTrigger>
              <p className="bg-cyan-500 text-primary hover:bg-cyan-300 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300">Hire me</p>
            </PopoverTrigger>
            <PopoverContent className="bg-slate-800 w-[400px]">
              <div className="space-y-4 p-4">
                <div className="flex flex-row justify-between ">
                  <Label className="text-white text-[12px]">You can either fill the contact form</Label>
                  <a href="/contact">
                    <Button type="button" size="sm" className="text-[12px]" variant="outline">
                      Contact Form
                    </Button>
                  </a>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <Label className="text-white text-[12px]">Or send mail directly</Label>
                  <a href="mailto:pushpakninave.jee@gmail.com">
                    <Button type="button" size="sm" className="text-[12px]" variant="outline">
                      Email
                    </Button>
                  </a>  
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden"><MobileNav/></div>
      </div>
    </header>
  )
}

export default Header