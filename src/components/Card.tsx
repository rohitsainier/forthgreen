interface CardProps {
  url?: string;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  type: CardType;
}

enum CardType {
  brand = "brand",
  product = "product",
}

function Card({ url, title, description, category, price, type }: CardProps) {
  //Note: if type if more then 2 we should use switch
  if (type === CardType.brand) {
    return (
      <div className="flex flex-col gap-6">
        <img src={url} alt={title} />
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-heading3 "> {title}</h3>
          <p className="text-paragraph text-gray-700">{description}</p>
        </div>
      </div>
    );
  } else if (type === CardType.product) {
    return (
      <div className="flex flex-col gap-4">
        <img src={url} alt={title} />
        <div className="flex flex-col text-left">
          <h1 className="text-heading3"> {title}</h1>
          <p className="text-paragraph text-gray-400 hover:text-black">
            {category}
          </p>
          <p className="text-paragraph">${price}</p>
        </div>
      </div>
    );
  }
}

export { Card, CardType };
