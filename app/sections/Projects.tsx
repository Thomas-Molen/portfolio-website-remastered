"use client"

import { Suspense, useState } from "react";
import ProjectCard, { SkeletonProjectCard } from "../components/ProjectCard"
import { ProjectTimeline, SkeletonProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"
import { useSearchParams, useRouter } from "next/navigation";
import { ViewOption, ViewSelector } from "../components/ViewSelector";

export default function Projects() {
  const [selectedView, setSelectedView] = useState("timeline");
  const viewOptions: ViewOption<"timeline" | "grid">[] = [
    { label: "Timeline", value: "timeline" },
    { label: "Grid", value: "grid" },
  ];

  function ProjectView() {
    switch (selectedView) {
      case "timeline":
        return <Suspense><TimelineView /></Suspense>;
      case "grid":
        return <GridView />;
      default:
        return <></>
    }
  }

  function TimelineView() {
    const queryParams = useSearchParams();
    const router = useRouter();

    // Determine initial selected project from query param
    const queryProject = queryParams.get("project");
    const preferedProject = _projects.find(p => p.project === queryProject) ?? _projects[0];
    const [selectedProject, setSelectedProject] = useState<Project>(preferedProject);

    function SelectProject(project: Project) {
      setSelectedProject(project);

      const fragmentIdentifier = window.location.hash;
      const currentSearchParams = new URLSearchParams(queryParams as URLSearchParams);
      currentSearchParams.set("project", project.project);

      router.replace(`${window.location.pathname}?${currentSearchParams.toString()}${fragmentIdentifier}`, { scroll: false });
    }

    return (
      <div className="hidden md:grid md:grid-cols-8 xl:grid-cols-10 gap-x-8">
        <div className="col-span-4 h-[470px] lg:h-[400px]">
          {selectedProject ? (
            <ProjectCard project={selectedProject} />
          ) : (
            <SkeletonProjectCard />
          )}
        </div>
        <div className="col-span-4">
          {selectedProject ? (
            <ProjectTimeline
              projects={_projects}
              onSelect={SelectProject}
              selectedProject={selectedProject}
            />
          ) : (
            <SkeletonProjectTimeline />
          )}
        </div>
      </div>
    );
  }

  function GridView() {
    const [showMore, setShowMore] = useState(false);

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Always visible project */}
          {_projects.slice(0, 4).map((project) => <ProjectCard project={project} key={`project-grid-${project.project}`} />)}
          {/* Show More for smaller displays */}
          {_projects.slice(4, 6).map((project) => <ProjectCard project={project} key={`project-grid-${project.project}`} className={showMore ? "" : "hidden xl:block"} />)}
          {/* Show More on all displays */}
          {_projects.slice(6).map((project) => <ProjectCard project={project} key={`project-grid-${project.project}`} className={showMore ? "" : "hidden"} />)}
        </div>
        {!showMore &&
          <div className="flex justify-center mt-4">
            <div className="bg-primary inline-flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
              onClick={() => setShowMore(true)}>
              <span>Show More</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.22 3.22V2.75A.75.75 0 0 1 8 2Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        }
      </>
    )
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">Projects Showcase</h2>
      {/* Large displays */}
      <div className="hidden md:block">
        <div className="justify-self-center w-64 mb-6">
          <ViewSelector options={viewOptions} selected={selectedView} onSelect={setSelectedView} />
        </div>
        <ProjectView />
      </div>
      {/* Small displays */}
      <div className="block md:hidden">
        <GridView />
      </div>
    </>
  );
}
