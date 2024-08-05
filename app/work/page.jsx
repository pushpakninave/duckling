
import GitTable from "@/components/GitTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getGitRepos } from "@/lib/requests";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from 'date-fns';
import dateFormat from 'dateformat';

const Work = async () => {
  const repoInfo = await getGitRepos();
  return (
    <div className="container mx-auto h-full">
      <HoverCard openDelay={2}>
        <HoverCardTrigger asChild>
          <Button variant="link" className="px-0">
            <div className="text-accent flex flex-row justify-between items-center max-w-[200px] mb-[10px]">
              <Avatar className="h-9 w-9 mr-[12px]">
                <AvatarImage src={repoInfo.viewer.avatarUrl} />
                <AvatarFallback>PN</AvatarFallback>
              </Avatar>
              <p>pushpak's profile</p>
            </div>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-70 bg-gray-900 text-white">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={repoInfo.viewer.avatarUrl} />
              <AvatarFallback>PN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold underline">@pushpakninave</h4>
              <div className="text-sm flex gap-2 flex-col">
                <div className="flex flex-row gap-3 items-center">
              {repoInfo.viewer.isHireable ? (
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                ) : (
                  <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                )} Open for Work 
                </div>
                {repoInfo.viewer.status.message}
              </div>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined {dateFormat(repoInfo.viewer.createdAt, "mmmm dS, yyyy")}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <h3 className="text-xl xl:text-2xl mb-6 max-w-[90%] font-bold">All Major Projects</h3>
      <GitTable repositoriesInfo={repoInfo.viewer.repositories} />
    </div>
  )
}

export default Work