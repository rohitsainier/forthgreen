// Define the NavbarInterface
export interface NavbarInterface {
  title: string;
  link: string;
}

// Create an array of objects conforming to the NavbarInterface
export const navbarItems: NavbarInterface[] = [
  { title: "Women", link: "/" },
  { title: "Men", link: "/" },
  { title: "Beauty", link: "/" },
  { title: "Accesories", link: "/" },
  { title: "Food", link: "/" },
  { title: "Drinks", link: "/" },
  { title: "Health", link: "/" },
  { title: "Miscellaneous", link: "/" },
];
