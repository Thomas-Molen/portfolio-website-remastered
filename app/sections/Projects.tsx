"use client"

import { Suspense, useEffect, useRef, useState } from "react";
import ProjectCard, { SkeletonProjectCard } from "../components/ProjectCard"
import { ProjectTimeline, SkeletonProjectTimeline } from "../components/ProjectTimeline";
import _projects from "@/projects.json"
import type Project from "@/types/project"
import { useSearchParams, useRouter } from "next/navigation";
import { ViewOption, ViewSelector } from "../components/ViewSelector";
import Scrollbar from "react-scrollbars-custom";

export default function Projects() {
  const [selectedView, setSelectedView] = useState("timeline");
  const viewOptions: ViewOption<"timeline" | "grid">[] = [
    { label: "Timeline", value: "timeline" },
    { label: "Grid", value: "grid" },
  ];

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-center mb-12">Projects Showcase</h2>
      {/* Large displays */}
      <div className="hidden md:block">
        <div className="justify-self-center w-64 mb-6">
          <ViewSelector options={viewOptions} selected={selectedView} onSelect={setSelectedView} />
        </div>
        <ProjectView view={selectedView} />
      </div>
      {/* Small displays */}
      <div className="block md:hidden px-3">
        <GridView />
      </div>
    </div>
  );
}

interface ProjectViewProps {
  view: string
}
function ProjectView({ view }: ProjectViewProps) {
  return (
    <>
      <div id="project-timeline" className={view == "timeline" ? "" : "hidden"}>
        <Suspense><TimelineView /></Suspense>
      </div>
      <div id="project-grid" className={view == "grid" ? "" : "hidden"}>
        <GridView />
      </div>
    </>
  )
}

function TimelineView() {
  const queryParams = useSearchParams();
  const router = useRouter();
  const scrollbarRef = useRef<Scrollbar & HTMLDivElement | null>(null);

  // Determine initial selected project from query param
  const queryProject = queryParams.get("project");
  const preferredProject = _projects.find(p => p.project === queryProject) ?? _projects[0];
  const [selectedProject, setSelectedProject] = useState<Project>(preferredProject);

  useEffect(() => {
    // Scroll to the prefered project when component first loads
    scrollbarRef.current?.scrollTo(undefined, _projects.indexOf(preferredProject) * 65);
  }, [])


  function SelectProject(project: Project) {
    setSelectedProject(project);

    const fragmentIdentifier = window.location.hash;
    const currentSearchParams = new URLSearchParams(queryParams as URLSearchParams);
    currentSearchParams.set("project", project.project);

    router.replace(`${window.location.pathname}?${currentSearchParams.toString()}${fragmentIdentifier}`, { scroll: false });
  }

  return (
    <div className="hidden md:grid md:grid-cols-8 xl:grid-cols-10 gap-x-4 px-2">
      <div className="col-span-4 h-[500px] lg:h-[420px] mt-4">
        {selectedProject ? (
          <ProjectCard project={selectedProject} />
        ) : (
          <SkeletonProjectCard />
        )}
      </div>
      <div className="col-span-4 xl:col-span-5 h-[500px]">
        {selectedProject ? (
          <Scrollbar
            ref={scrollbarRef}
            wrapperProps={{ style: { inset: '0px 10px 0px 0px' } }}
            contentProps={{ style: { paddingRight: "5px" } }}
            thumbYProps={{ style: { backgroundColor: "var(--color-muted)" } }}
            trackYProps={{ style: { backgroundColor: "rgba(0,0,0,0.1)", top: "0px", height: "100%" } }}>
            <ProjectTimeline
              projects={_projects}
              onSelect={SelectProject}
              selectedProject={selectedProject}
            />
          </Scrollbar>
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
        {/* First fold, always visible */}
        {_projects.slice(0, 3).map((project) => <ProjectCard project={project} key={`project-grid-${project.project}`} />)}
        {/* Second fold, visible for medium+ displays */}
        {_projects.slice(3, 4).map((project) => <ProjectCard project={project} key={`project-grid-${project.project}`} className={showMore ? "" : "hidden md:block"} />)}
        {/* Second fold, visible for large displays */}
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