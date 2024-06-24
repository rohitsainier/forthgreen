import { brandItems } from "@/exports/interface";
import { Card } from "@/components";

export default function Brands() {
  return (
    <div className="mt-10 flex gap-10 ">
      {brandItems.map((card, index) => (
        <Card
          key={index}
          url={card.url}
          title={card.title}
          description={card.description}
          type={card.type}
        />
      ))}
    </div>
  );
}
