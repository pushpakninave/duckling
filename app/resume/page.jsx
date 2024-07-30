
'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiGraphql, SiPostman, SiLaravel, SiGithub, SiDocker } from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import classNames from 'classnames';

// about data
const about = {
  title: 'About me',
  description: 'Hi there! I’m a full-stack engineer with a passion for turning coffee into code and complex problems into elegant solutions. When I’m not busy you can find me at a play arena or a badminton court.\n I believe in clean code, good humor, and that the best ideas often come when you least expect them—like during a game of badminton or a caffeine-fueled brainstorm session!',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pushpak Ninave"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)9307615504"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "pushpakninave.jee@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
}
// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I am involved in developing and maintaining web applications using Angular and Spring Boot. My role require collaborating with cross-functional teams to design and implement features, while optimizing performance and ensuring high-quality code.',
  items: [
    {
      company: 'Omnify Inc.',
      position: 'Jr. FullStack Engineer',
      duration: '2023 - 2024'
    },
    {
      company: 'Omnify Inc.',
      position: 'FullStack Intern',
      duration: '2023 - 2024'
    }
  ]
}
// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'My academic background equipped me with essential skills, which I have applied throughout my career in software development.',
  items: [
    {
      institution: 'Nagpur University',
      degree: 'Computer Science',
      duration: '2019 - 2023'
    }
  ]
}
// skill data
const skills = {
  icon: '/assets/resume/badge.svg',
  title: 'My Skills',
  description: 'I have experience working with a these technologies, which includes developing both front-end and back-end solutions, optimizing user interfaces, and building scalable applications.',
  items: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
      color: 'text-orange-600' // HTML5 color
    },
    {
      icon: <FaCss3 />,
      name: 'css3',
      color: 'text-blue-600' // CSS3 color
    },
    {
      icon: <FaJs />,
      name: 'javascript',
      color: 'text-yellow-500' // JavaScript color
    },
    {
      icon: <FaReact />,
      name: 'react.js',
      color: 'text-cyan-500' // React.js color
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
      color: 'text-red-600' // Angular color
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
      color: 'text-black' // Next.js color
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
      color: 'text-teal-400' // Tailwind CSS color
    },
    {
      icon: <SiGraphql />,
      name: 'graphql',
      color: 'text-pink-500' // GraphQL color
    },
    {
      icon: <SiPostman />,
      name: 'postman',
      color: 'text-orange-500' // Postman color
    },
    {
      icon: <SiLaravel />,
      name: 'laravel',
      color: 'text-red-600' // Laravel color
    },
    {
      icon: <FaJava />,
      name: 'java',
      color: 'text-cyan-800' // Java color
    },
    {
      icon: <SiSpringboot />,
      name: 'springboot',
      color: 'text-green-500' // Spring Boot color
    },
    {
      icon: <SiGithub />,
      name: 'github',
      color: 'text-white' // Spring Boot color
    },
    {
      icon: <SiDocker />,
      name: 'docker',
      color: 'text-cyan-800' // Spring Boot color
    }
  ]
}
const Resume = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.8, ease: "easeIn" }
        }}
        className="min-h-[80v] flex items-center justify-center py-12 xl:py-6"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[250px]" >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[250px]" >
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.items.slice().reverse().map((skill, index) => {
                      return (
                        <li key={index} className="shadow-custom-navy hover:scale-105 transition-transform duration-300">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className={classNames(
                                  "text-6xl transition-all duration-300",
                                  {
                                    'group-hover:text-orange-600': skill.color === 'text-orange-600',
                                    'group-hover:text-blue-600': skill.color === 'text-blue-600',
                                    'group-hover:text-yellow-500': skill.color === 'text-yellow-500',
                                    'group-hover:text-cyan-500': skill.color === 'text-cyan-500',
                                    'group-hover:text-red-600': skill.color === 'text-red-600',
                                    'group-hover:text-black': skill.color === 'text-black',
                                    'group-hover:text-teal-400': skill.color === 'text-teal-400',
                                    'group-hover:text-pink-500': skill.color === 'text-pink-500',
                                    'group-hover:text-orange-500': skill.color === 'text-orange-500',
                                    'group-hover:text-cyan-700': skill.color === 'text-cyan-800',
                                    'group-hover:text-green-500': skill.color === 'text-green-500'
                                  }
                                )}>
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>{skill.name}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {
                          about.info.map((item, index)=>{
                            return(
                              <li key={index} className="flex items-center justify-items-center xl:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span>{item.fieldValue}</span>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume