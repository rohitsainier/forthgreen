import { navbarItems } from "@/exports/interface";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-paragraph flex gap-10 sm:ml-[200px] mr-[100px] mt-9 mb-9">
      {navbarItems.map((item, index) => (
        <Link href={item.link} key={index}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
