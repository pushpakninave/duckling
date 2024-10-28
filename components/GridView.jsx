import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import projects from "@/lib/data"
import ProjectCard from "./ProjectCard"
import ProjectCardMobile from "./ProjectCardMobile";
import { Button } from "./ui/button";

function GridView() {
    const projectsData = projects;
    return (
        <div>
            <Carousel className="hidden md:flex container w-[80vw] md:w-[60vw]">
                <CarouselContent>
                    {projectsData.map((project, index) => (
                        <CarouselItem key={index}>
                            <ProjectCard projectInfo={project} index={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="grid gap-5 md:hidden mt-2">
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <ProjectCardMobile projectInfo={project} index={index}/>
                    </div>
                ))}
                <div className="flex items-center justify-center mb-5">
                    <Button>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default GridView