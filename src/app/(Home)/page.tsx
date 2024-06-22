"use client";
import Image from "next/image";
import { CardType, Card, Navbar } from "@/components";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState("");
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
