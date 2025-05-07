export default interface Project {
    project: string;
    company: string;
    body: string;
    technologies: string[];
    date: {
        start: string;
        end: string | null;
    };
}