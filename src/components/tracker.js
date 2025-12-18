"use client"
import { useEffect } from "react";

export default function Tracker(){
      useEffect(() => {
  if (typeof document === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source");

  const source =
    utmSource ||
    document.referrer ||
    "direct";

  console.log("Traffic source:", source);
}, []);


      return null;
}
