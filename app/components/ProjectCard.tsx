import Project from "@/types/project";
import Badge from "./Badge";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-background border border-muted rounded-md p-6 h-full text-sm">
            <div className="mb-6">
                <p className="text-2xl font-medium">{project.project}</p>
                <p className="text-foreground-muted">{project.company}</p>
            </div>
            <p>{project.body}</p>
            <div className="text-xs flex gap-1 flex-wrap mt-5">
                {project.technologies.map((technology, index) => 
                    <Badge body={technology} key={index}/>
                )}
            </div>
        </div>
    )
}