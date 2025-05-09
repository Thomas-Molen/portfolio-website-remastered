"use client"

import { Suspense, useState } from "react";
import ProjectCard, { SkeletonProjectCard } from "../components/ProjectCard"
import { ProjectTimeline, SkeletonProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);

    function TimelineView() {
        return (
            <div className="hidden md:grid md:grid-cols-8 xl:grid-cols-10 gap-x-8" >
                <div className="col-span-4 h-[470px] lg:h-[400px]">
                    {selectedProject ?
                        <ProjectCard project={selectedProject} />
                        :
                        <SkeletonProjectCard />
                    }
                </div>
                <div className="col-span-4">
                    <ProjectTimeline
                        projects={_projects}
                        onSelect={(selectedProject => setSelectedProject(selectedProject))}
                        selectedProject={selectedProject} />
                </div>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-16">Projects Portfolio</h2>
            <Suspense>
                <TimelineView />
            </Suspense>
        </>
    )
}