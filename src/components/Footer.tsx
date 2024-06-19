import { fb, instagram, x, thread } from "@/exports/images";
import Image from "next/image";

export default function Footer() {
  // Array of image data
  const images = [
    { src: fb, alt: "fb" },
    { src: instagram, alt: "instagram" },
    { src: x, alt: "x" },
    { src: thread, alt: "thread" },
  ];

  return (
    <div className="flex w-full h-[20vh] bg-[#f5f6f6] items-center justify-center gap-16">
      {images.map((image, index) => (
        <div
          key={index}
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <Image src={image.src} alt={image.alt} width={24} height={24} />
        </div>
      ))}
    </div>
  );
}
