"use client"

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard"
import { ProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"
import { useSearchParams, useRouter } from "next/navigation";

export default function Projects() {
    const queryParams = useSearchParams();
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState<Project>(_projects[0]);

    useEffect(() => {
        const queryProject = queryParams.get("project");

        if (queryProject) {
            const preferedProject = _projects.find(p => p.project === queryProject);
            if (preferedProject) setSelectedProject(preferedProject);
        }
    }, [queryParams])

    function SelectProject(project: Project) {
        setSelectedProject(project);

        const fragmentIdentifier = window.location.hash; // Explicitely store fragment identifier as next navigation will void it

        const currentSearchParams = new URLSearchParams(queryParams as URLSearchParams);
        currentSearchParams.set("project", project.project);
        router.replace(`${window.location.pathname}?${currentSearchParams.toString()}${fragmentIdentifier}`, { scroll: false });
    }

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-16">Projects Portfolio</h2>
            {/* Timeline (large displays) */}
            <div className="hidden md:grid md:grid-cols-8 xl:grid-cols-10 gap-x-8">
                <div className="col-span-4 h-[470px] lg:h-[400px]">
                    <ProjectCard project={selectedProject} />
                </div>
                <div className="col-span-4">
                    <ProjectTimeline 
                        projects={_projects}
                        onSelect={(selectedProject => SelectProject(selectedProject))}
                        selectedProject={selectedProject}/>
                </div>
            </div>
        </>
    )
}