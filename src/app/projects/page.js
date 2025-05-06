import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="p-8">
            <Link href="/" className="link-button">
                Go back Home
            </Link>
            <Link href="/about" className="link-button">
                Go to About
            </Link>
            <h1 className="text-3xl font-semibold mb-6">My Projects</h1>
            <ul className="space-y-4">
                {projects.map((project) => (
                    <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`} className="text-blue-500 underline">
                            {project.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}