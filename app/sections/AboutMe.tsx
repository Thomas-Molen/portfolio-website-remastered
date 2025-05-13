import Badge from "../components/Badge";
import TechnologyOverview from "../components/TechnologyOverview";

export default function AboutMe() {
    return (
        <div className="container px-5">
            <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
                <div className="text-lg font-medium space-y-4">
                    <p>
                        My name is Thomas Van der Molen, and I am a Dutch software engineer
                        with a double major in <span className="text-primary">Software Engineering</span> & <span className="text-primary">Artificial Intelligence</span>&nbsp;
                        from Fontys University of Applied Sciences, where I graduated summa cum laude.
                    </p>
                    <p>
                        Currently working as a Consultant at Info Support,
                        I specialize in developing business-oriented solutions with a focus on scalability and maintainability.
                        My expertise lies primarily in backend development with C# and .NET, along with robust DevOps pipelines and seamless Cloud integrations.
                    </p>
                    <p>
                        Throughout my career, I've collaborated with both small and large businesses,
                        successfully investigating and executing projects across various domains alongside other like-minded, enthusiastic professionals.
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