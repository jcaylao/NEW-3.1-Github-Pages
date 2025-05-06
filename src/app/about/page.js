import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Hi my name is Jaira and this is my about page!</p>
            <Link href="/" className="link-button">
                Go back Home
            </Link>
            <Link href="/projects" className="link-button">
                Go to Projects
            </Link>
        </div>
    );
}
