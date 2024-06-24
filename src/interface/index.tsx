// Define the NavbarInterface
interface NavbarInterface {
  title: string;
  link: string;
}

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

interface HeroInterface {
  picture: string;
  title: string;
  desc: string;
  buttonTitle: string;
  flip: boolean;
}

export { navbarItems, CardType };
export type { CardProps, NavbarInterface, HeroInterface };
