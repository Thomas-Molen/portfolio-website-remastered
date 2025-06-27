import Badge from "../components/Badge";
import TechnologyOverview from "../components/TechnologyOverview";

export default function AboutMe() {
    return (
        <div className="container px-5">
            <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
                <div className="text-lg font-medium space-y-4">
                    <p>
                        My name is <span className="text-primary">Thomas Van der Molen</span> and I am a Dutch full stack Software Engineer currently working at Info Support.
                    </p>
                    <p>
                        I build business-oriented software solutions for a variety of clients and industries, often involving cloud environments, modern deployment strategies, and designing stable/maintainable software architecture.
                    </p>
                    <p>
                        I studied <span className="text-primary">Software Engineering</span> and <span className="text-primary">Artificial Intelligence</span> at Fontys University of Applied Sciences, where I graduated summa cum laude.
                    </p>
                    <p>
                        I enjoy solving complex technical challenges and working closely with my peers to create suitable solutions.
                    </p>
                    <div className="space-y-2 text-sm">
                        <Badge body="Microsoft Certified: Azure Developer (AZ-204)" />
                        <Badge body="BSc Software Engineering (Summa Cum Laude)" />
                        <Badge body="BSc Artificial Intelligence (Summa Cum Laude)" />
                    </div>
                </div>
                <div>
                    <div className="border border-muted rounded-md p-5">
                        <div className="text-center xl:text-left">
                            <h3 className="text-2xl font-bold">Technology Expertise</h3>
                            <p className="text-foreground-muted mb-4">Expertise in enterprise technologies</p>
                        </div>
                        <TechnologyOverview />
                    </div>
                </div>
            </div>
        </div>
    )
}