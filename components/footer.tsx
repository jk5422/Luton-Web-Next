import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container py-[5rem] flex justify-between items-start max-lg:flex-col gap-8">
      <div className="flex-[0_0_22%]">
        <p className="text-xl font-semibold pb-4">Quick Links</p>

        <div className="flex flex-col gap-1">
          <Link href={"/"}>Company Profile</Link>
          <Link href={"/"}>Infrastructure</Link>
          <Link href={"/"}>Export</Link>
          <Link href={"/"}>E-Catelogue</Link>
          <Link href={"/"}>Event & Exhibition</Link>
        </div>
      </div>
      <div className="flex-[0_0_22%]">
        <p className="text-xl font-semibold pb-4">Contact Us</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Link href={"tel:+919696755555"}>+91 96967 55555</Link>
            <Link href={"tel:+917574855511"}>+91 75748 55511</Link>
          </div>
          <Link href={"mailto:lutonceramic@gmail.com"}>
            lutonceramic@gmail.com
          </Link>
          <p>
            <span className="font-semibold">Luton Ceramic Pvt. Ltd.</span>{" "}
            <br />
            Srv no.555,morbi-jetpar road, <br />
            opp. viratnagar,At rangpar, <br />
            Morbi-2 (gujarat) INDIA.
          </p>
        </div>
      </div>
      <div className="flex-[0_0_22%]">
        <p className="text-xl font-semibold pb-4 text-left">Stay In Touch</p>

        <div className="w-full flex flex-col gap-2 items-center max-lg:flex-row max-lg:flex-wrap">
          <Link
            href={"/"}
            className="border-[1px] border-Black-100 p-[6px] rounded-full cursor-pointer"
          >
            <Facebook size={26} strokeWidth={1} />
          </Link>
          <Link
            href={"/"}
            className="border-[1px] border-Black-100 p-[6px] rounded-full cursor-pointer"
          >
            <Twitter size={26} strokeWidth={1} />
          </Link>
          <Link
            href={"/"}
            className="border-[1px] border-Black-100 p-[6px] rounded-full cursor-pointer"
          >
            <Linkedin size={26} strokeWidth={1} />
          </Link>
          <Link
            href={"/"}
            className="border-[1px] border-Black-100 p-[6px] rounded-full cursor-pointer"
          >
            <Instagram size={26} strokeWidth={1} />
          </Link>
        </div>
      </div>
    </div>
  );
}
