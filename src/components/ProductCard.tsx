import { ProductCardInterface } from "@/interface";
import Link from "next/link";

export default function ProductCard({
  image,
  title,
  category,
  price,
}: ProductCardInterface) {
  return (
    <div className="text-paragraph flex gap-10">
      <img src={image} />
      <p>{title}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
}
