import Link from 'next/link';

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>I specialize in creating user-friendly websites and apps, as they are easy to use and navigate in order
                to meet user needs. With a major in Cognitive Science focusing on Design & Interaction and a minor in
                Computer Science, I have developed a strong foundation in design principles and coding. Some of my
                hobbies include crocheting while binge-watching my current favorite shows, playing video games,
                and spending time with friends & family.</p>
            <Link href="/" className="link-button">
                Go back Home
            </Link>
            <Link href="/projects" className="link-button">
                Go to Projects
            </Link>
        </div>
    );
}
