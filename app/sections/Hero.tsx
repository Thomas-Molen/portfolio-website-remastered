// import Image from "next/image"
import AchievementCard from "../components/AchievementCard"

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-16 items-center md:min-h-96">
        <div className="flex-1 space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">
            Software Engineer & <br /><span className="text-primary">Consultant</span>
          </h1>
          <p className="text-xl text-foreground-muted">
            Building quality business-oriented solutions.
          </p>
          <div className="flex gap-3 text-sm font-medium">
            <a href="#projects"
              className="bg-primary inline-flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/files/CV-Thomas-Van-der-Molen.pdf" target="_blank"
              className="border border-muted inline-flex items-center gap-2 py-2 px-4 rounded-md hover:bg-muted transition-colors">
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1">
          {/* <div className="relative w-96 h-96 overflow-hidden">
          <Image
          src="/assets/profile-picture.png"
          alt="Thomas Van der Molen"
          fill
          className=""
          priority
          />
          </div> */}
        </div>
      </div>
      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
        <a href="/files/CV-Thomas-Van-der-Molen.pdf" target="_blank">
          <AchievementCard
            title="Academic Achievement"
            body="Double Major"
            description="Software Engineering & AI Summa Cum Laude"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M7.702 1.368a.75.75 0 0 1 .597 0c2.098.91 4.105 1.99 6.004 3.223a.75.75 0 0 1-.194 1.348A34.27 34.27 0 0 0 8.341 8.25a.75.75 0 0 1-.682 0c-.625-.32-1.262-.62-1.909-.901v-.542a36.878 36.878 0 0 1 2.568-1.33.75.75 0 0 0-.636-1.357 38.39 38.39 0 0 0-3.06 1.605.75.75 0 0 0-.372.648v.365c-.773-.294-1.56-.56-2.359-.8a.75.75 0 0 1-.194-1.347 40.901 40.901 0 0 1 6.005-3.223ZM4.25 8.348c-.53-.212-1.067-.411-1.611-.596a40.973 40.973 0 0 0-.418 2.97.75.75 0 0 0 .474.776c.175.068.35.138.524.21a5.544 5.544 0 0 1-.58.681.75.75 0 1 0 1.06 1.06c.35-.349.655-.726.915-1.124a29.282 29.282 0 0 0-1.395-.617A5.483 5.483 0 0 0 4.25 8.5v-.152Z" />
                <path d="M7.603 13.96c-.96-.6-1.958-1.147-2.989-1.635a6.981 6.981 0 0 0 1.12-3.341c.419.192.834.393 1.244.602a2.25 2.25 0 0 0 2.045 0 32.787 32.787 0 0 1 4.338-1.834c.175.978.315 1.969.419 2.97a.75.75 0 0 1-.474.776 29.385 29.385 0 0 0-4.909 2.461.75.75 0 0 1-.794 0Z" />
              </svg>
            } />
        </a>
        <a href="#projects" className="sm:hidden lg:block">
          <AchievementCard
            title="Completed Projects"
            body="10+"
            description="Across various domains and technologies"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z" />
              </svg>
            } />
        </a>
        <a href="#about-me">
          <AchievementCard
            title="Technology Expertise"
            body=".NET"
            description="Including ASP.NET, Blazor, Azure and more"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M1 9.5A3.5 3.5 0 0 0 4.5 13H12a3 3 0 0 0 .917-5.857 2.503 2.503 0 0 0-3.198-3.019 3.5 3.5 0 0 0-6.628 2.171A3.5 3.5 0 0 0 1 9.5Z" />
              </svg>
            } />
        </a>
      </div>
    </>
  )
}