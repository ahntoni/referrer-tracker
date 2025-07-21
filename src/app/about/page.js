"use client"
import Tracker from "@/components/tracker";

export default function About() {
  return (
    <div>
      <Tracker/>
      <h1> About Page</h1>
      <nav>
        <a href="/">Go to Home</a>
        <br />
        <a href="/contact">Go to Contact</a>
      </nav>
    </div>
  );
}
