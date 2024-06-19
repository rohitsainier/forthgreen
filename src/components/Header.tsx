import logo from "../../public/assets/logo.png";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex mt-9 sm:ml-[200px] mr-[100px] items-center justify-between">
      <Image src={logo} alt="logo" height={25}></Image>
      <div className="flex gap-6">
        <p className="hover:underline">SHOP</p>
        <p className="hover:underline">ABOUT</p>
      </div>
    </div>
  );
}
