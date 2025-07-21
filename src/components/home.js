"use client"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      <nav>
        <Link
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/about";
          }}
        >
          Go to About
        </Link>
        <br />
        <Link
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/contact";
          }}
        >
          Go to Contact
        </Link>
      </nav>
    </div>
  );
}