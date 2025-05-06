import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Jaira Caylao</h1>
            <p>UX/UI Designer & Developer</p>
            <Link href="/about" className="link-button">
                Go to About
            </Link>
            <Link href="/projects" className="link-button">
                Go to Projects
            </Link>
        </div>
    );
}