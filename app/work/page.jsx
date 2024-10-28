'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import ProjectView from "@/components/ProjectView";
import React, { useEffect, useState } from "react";
import WorkHoverCard from "@/components/WorkHoverCard";
import { getGitRepos } from "@/lib/requests";

const Work = ({ children }) => {
  const [isGridView, setisGridView] = useState(true);
  const [repoInfo, setRepoInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGitRepos();
        setRepoInfo(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  const handleViewSwitchChange = (event) => {
    console.log(event);
    setisGridView(event);
  }

  return (
    <div className="container mx-auto h-full">
      {repoInfo && (
        <WorkHoverCard repoInfo={repoInfo} />
      )}<div className="flex flex-row justify-between items-center mb-6">
        <h3 className="text-xl xl:text-2xl max-w-[90%] font-bold">Some things I've Built</h3>
        <div className="flex items-center space-x-2">
          <Switch checked={isGridView} onCheckedChange={handleViewSwitchChange} />
          {/* <Label className="hidden md:flex" htmlFor="compact-mode">Compact view</Label>
          <Label className="hidden md:flex" htmlFor="grid-mode">Grid view</Label> */}
        </div>
      </div>
      {repoInfo && (
        <ProjectView isGridView={isGridView} repoInfo={repoInfo} />
      )}
    </div>
  )
}

export default Work