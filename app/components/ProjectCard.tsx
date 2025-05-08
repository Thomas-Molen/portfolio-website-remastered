import Project from "@/types/project";
import Badge from "./Badge";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-background border border-muted rounded-md p-6 h-full space-y-4 overflow-hidden">
            <div className="flex justify-between ">
                <div>
                    <p className="text-2xl font-medium">{project.project}</p>
                    <p className="text-sm text-foreground-muted">{project.company}</p>
                </div>
                {project.nda &&
                    <div className="text-sm bg-yellow-400/10 text-yellow-400 rounded-2xl py-1 px-3 h-fit flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <span className="ms-1">
                            NDA
                        </span>
                    </div>
                }
            </div>
            <div>
                {project.body.map((content, index) =>
                    <p key={`${project.project}-body-${index}`} className="mb-2">{content}</p>
                )}
            </div>
            {project.nda &&
                <p className="text-xs text-foreground-muted italic">
                    This project is under a Non-Disclosure Agreement. Some information and technologies may be omitted.
                </p>
            }
            <div className="text-xs flex gap-1 flex-wrap">
                {project.technologies.map(technology =>
                    <Badge body={technology} key={`${project.project}-${technology}`} />
                )}
            </div>
        </div>
    )
}

export function SkeletonProjectCard() {
    return (
        <div className="border border-muted rounded-md p-6 h-full">
            <div className="flex animate-pulse">
                <div className="flex-1 space-y-6">
                    <div className="h-5 rounded bg-muted"></div>
                    <div className="h-20 rounded bg-muted"></div>
                    <div className="h-15 rounded bg-muted"></div>
                </div>
            </div>
        </div>
    )
}
