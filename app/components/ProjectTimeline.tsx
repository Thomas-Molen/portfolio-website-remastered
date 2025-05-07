import type React from "react"
import type Project from "@/types/project"

interface ProjectTimelineProps {
  projects: Project[]
  onSelect: (project: Project) => void
  selectedProject: Project
}

export function ProjectTimeline({ projects, onSelect, selectedProject }: ProjectTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-muted transform -translate-x-1/2"></div>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <TimelineItem
            key={index}
            project={project}
            selected={project == selectedProject}
            onClick={() => onSelect(project)} />
        ))}
      </div>
    </div>
  )
}

interface TimelineItemProps {
  project: Project
  selected: boolean
  onClick: () => void
}

function TimelineItem({ project, selected, onClick }: TimelineItemProps) {
  return (
    <div className={`relative flex items-start ${selected ? "" : "cursor-pointer"}`} onClick={() => onClick()}>
      <div className="absolute left-4 transform -translate-x-1/2 flex items-center justify-center">
        <div className={`h-8 w-8 rounded-full border-2 ${selected ? "border-primary/40" : "border-muted"} flex items-center justify-center bg-background`}>
          <div className={`h-3 w-3 rounded-full transition-colors duration-300 ${selected ? "bg-primary" : "bg-foreground-muted"}`}></div>
        </div>
      </div>

      <div className={`group flex justify-between items-center ml-10 px-4 rounded-lg w-full transition-normal duration-300 ${selected ? "" : " hover:"}bg-muted`}>
        <div>
          <p className={selected ? "text-primary" : "text-foreground"}>{project.project}</p>
          <p className="text-sm text-foreground-muted">{project.company}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-4 transition-opacity ${selected ? "" : "invisible group-hover:visible"}`}>
          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}
