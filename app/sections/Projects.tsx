"use client"

import { Suspense, useEffect, useState } from "react";
import ProjectCard, { SkeletonProjectCard } from "../components/ProjectCard"
import { ProjectTimeline, SkeletonProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"
import { useSearchParams, useRouter } from "next/navigation";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);

    function TimelineView() {
        const queryParams = useSearchParams();
        const router = useRouter();

        useEffect(() => {
            if (selectedProject) return;

            const queryProject = queryParams.get("project");
            const preferredProject = _projects.find(p => p.project === queryProject);

            setSelectedProject(preferredProject ?? _projects[0]);
        }, [queryParams, selectedProject])

        function SelectProject(project: Project) {
            setSelectedProject(project);

            const fragmentIdentifier = window.location.hash; // Explicitely store fragment identifier as next navigation will void it

            const currentSearchParams = new URLSearchParams(queryParams as URLSearchParams);
            currentSearchParams.set("project", project.project);
            router.replace(`${window.location.pathname}?${currentSearchParams.toString()}${fragmentIdentifier}`, { scroll: false });
        }

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
                    {selectedProject ?
                        <ProjectTimeline
                            projects={_projects}
                            onSelect={(selectedProject => SelectProject(selectedProject))}
                            selectedProject={selectedProject} />
                        :
                        <SkeletonProjectTimeline />
                    }
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