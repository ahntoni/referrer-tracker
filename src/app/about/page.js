"use client"
import Tracker from "@/components/tracker";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Tracker />
      <h1> About Page</h1>
      <nav>
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          Go to Home
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
