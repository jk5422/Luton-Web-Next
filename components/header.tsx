import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, UserRound } from "lucide-react";
import { DialogComponent } from "./dialogComponent";

export default function Header() {
  return (
    <div className="max-w-[75%] flex justify-between items-center mx-auto py-4 max-lg:max-w-[90%]">
      <div className="flex-[0_0_15%]">
        <Link href="/">
          <Image
            src={"/images/logo-1.png"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="flex-[0_0_65%] flex items-center justify-center gap-4 max-lg:hidden">
        <Link href="/">Home</Link>
        <div className="relative group">
          <button>Product</button>
          <div className="absolute z-[9999] top-6 left-0 bg-black text-white flex flex-col gap-2 min-w-[12rem] px-4 py-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
            <Link href="/product/digitalheavyduty">Digital Heavy Duty</Link>
            <Link href="/product/digitalparking">Digital Parking</Link>
          </div>
        </div>

        <DialogComponent />

        <div className="relative group">
          <button>Info/Catelouge</button>
          <div className="absolute z-[9999] top-6 left-0 bg-black text-white flex flex-col gap-2 min-w-[14rem] px-4 py-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
            <Link href="/technical-specification">Technical Specification</Link>
            <Link href="/catelouge">E-Catelouge</Link>
            <Link href="/event">Event</Link>
          </div>
        </div>
        <div className="relative group">
          <button>About</button>
          <div className="absolute z-[9999] top-6 left-0 bg-black text-white flex flex-col gap-2 min-w-[12rem] px-4 py-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
            <Link href="/company-profile">Company Profile</Link>
            <Link href="/infrastructure">Infrastructure</Link>
            <Link href="/export">Export</Link>
          </div>
        </div>
      </div>
      <div className="flex-[0_0_15%] flex items-center justify-end gap-4 max-lg:hidden">
        <Link href="/">
          <ShoppingBag />
        </Link>
        <Link href="/">
          <UserRound />
        </Link>
      </div>
    </div>
  );
}
