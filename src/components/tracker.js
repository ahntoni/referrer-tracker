"use client"
import { useEffect } from "react";

export default function Tracker(){
      useEffect(()=>{
          if (typeof document !== undefined) {
            const prevPage = document?.referrer;
            console.log("previous Page:", prevPage);
          }
      },[])

      return null;
}