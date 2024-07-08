// Define the NavbarInterface
interface NavbarInterface {
  title: string;
  link: string;
}
// TODO: - Need to fetch data from api
// Create an array of objects conforming to the NavbarInterface
const navbarItems: NavbarInterface[] = [
  { title: "Women", link: "/" },
  { title: "Men", link: "/" },
  { title: "Beauty", link: "/" },
  { title: "Accesories", link: "/" },
  { title: "Food", link: "/" },
  { title: "Drinks", link: "/" },
  { title: "Health", link: "/" },
  { title: "Miscellaneous", link: "/" },
];

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

// TODO: - Need to fetch data from api
const brandItems: CardProps[] = [
  {
    url: "https://forthgreen.com/wp-content/uploads/2024/06/cakeordeatch.png",
    title: "Cake or Death",
    description:
      "The Cake or Death experience is a luxury treat; from it dropping on your doormat, right through to the last mouthful. These aren’t any ordinary brownies!",
    type: CardType.brand,
  },
  {
    url: "https://forthgreen.com/wp-content/uploads/2024/06/beflamboyant.png",
    title: "Beflamboyant",
    description:
      "Beflamboyant represents a dynamic collection of elements that together create a global, transparent, and responsible initiative in the vegan sneaker industry. ",
    type: CardType.brand,
  },
  {
    url: "https://forthgreen.com/wp-content/uploads/2024/06/niluu.png",
    title: "Niluu",
    description:
      "At niluu, we take it upon ourselves to carve the path forward towards a fair and flourishing world. Through our multilayered actionable approach, we make choosing sustainable as easy as slipping on a silky-soft robe.",
    type: CardType.brand,
  },
];

interface HeroInterface {
  picture: string;
  title: string;
  desc: string;
  buttonTitle: string;
  flip: boolean;
}

interface ProductCardInterface {
  image: string;
  title: string;
  category: string;
  price: string;
}

export { navbarItems, brandItems, CardType };
export type { CardProps, NavbarInterface, HeroInterface, ProductCardInterface };
