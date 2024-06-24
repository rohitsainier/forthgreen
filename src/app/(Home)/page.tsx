"use client";
import Image from "next/image";
import { Navbar, HeroSection } from "@/components";
import { useState } from "react";

export default function Home() {
  return (
    <div className="sm:ml-[200px] mr-[100px] mt-9 mb-9">
      <Navbar />
      <HeroSection
        picture="https://forthgreen.com/wp-content/uploads/2024/06/atikh-bana-_KaMTEmJnxY-unsplash-1-1-1.png"
        title="Vegan accessories for this summer 2024"
        desc="Discover an array of stylish vegan fashion accessories, thoughtfully curated by Forthgreen to bring you the best in cruelty-free, eco-friendly apparel."
        buttonTitle="Read more"
        flip={false}
      />
      <HeroSection
        picture="https://forthgreen.com/wp-content/uploads/2024/06/amanda-vick-Az3yuE3out0-unsplash-1-1.png"
        title="What’s behind vegan products shoes?"
        desc="Explore the most common materials used to craft “leather” for shoes and trainers. Dive into our curated selection for this season and find the perfect pair to elevate your style!"
        buttonTitle="Coming soon"
        flip={true}
      />
    </div>
  );
}
