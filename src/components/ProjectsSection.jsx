


const projects = [
    {
        id: 1,
        title: "RateMyPrUFessor Landing Page",
        description: "A landing page app for a google extension using HTML, CSS, and JavaScript.",
        image: "#",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail and user experience.
            </p>
        </div>

    </section>
}