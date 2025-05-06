import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <img src={project.image} alt={project.title} className="rounded shadow mb-6" />
            <p className="text-lg">{project.description}</p>
        </div>
    );
}