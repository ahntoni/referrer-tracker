"use client"
import Tracker from "@/components/tracker";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Tracker />
      <h1> Contact Page</h1>
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
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/about";
          }}
        >
          Go to About
        </Link>
      </nav>
    </div>
  );
}
