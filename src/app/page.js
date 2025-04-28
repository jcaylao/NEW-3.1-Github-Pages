import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Hi my name is Jaira and this is my home page!</p>
            <Link href="/about" className="link-button">
                Go to About
            </Link>
        </div>
    );
}