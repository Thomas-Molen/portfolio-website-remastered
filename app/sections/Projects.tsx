"use client"

import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
import { ProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project>(_projects[0]);

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-16">Projects Portfolio</h2>
            <div className="grid grid-cols-10 gap-x-8">
                <div className="col-span-4 h-[400px]">
                    <ProjectCard project={selectedProject} />
                </div>
                <div className="col-span-4">
                    <ProjectTimeline 
                        projects={_projects}
                        onSelect={(selectedProject => setSelectedProject(selectedProject))}
                        selectedProject={selectedProject}/>
                </div>
            </div>
        </>
    )
}