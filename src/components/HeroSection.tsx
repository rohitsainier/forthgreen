import { HeroInterface } from "@/exports/interface";
import Image from "next/image";

export function HeroSection({
  picture,
  title,
  desc,
  buttonTitle,
  flip,
}: HeroInterface) {
  return (
    <div
      className={`flex items-center justify-around mt-12 mb-12 gap-20 ${
        flip ? "flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-[450px] w-[1800px] rounded-2xl roun overflow-hidden">
        <Image
          src={picture}
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="text-start">
        <h1 className="font-medium text-heading-secondary">{title}</h1>
        <p className="text-paragraph mt-6 text-gray-500">{desc}</p>
        <button className="bg-black text-white font-light py-2 px-4 rounded-lg inline-block mt-6">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
}
