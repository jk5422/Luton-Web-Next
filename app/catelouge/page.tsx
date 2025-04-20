import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "12X12 New Luton",
    imgSrc: "/images/banner-home.png",
    src: "/pdf/12X12.pdf",
  },
  {
    id: 2,
    name: "16X16 New Luton",
    imgSrc: "/images/banner-home.png",
    src: "/pdf/12X12.pdf",
  },
  {
    id: 3,
    name: "20X20 New Luton",
    imgSrc: "/images/banner-home.png",
    src: "/pdf/12X12.pdf",
  },
  {
    id: 4,
    name: "12X12 New Luton",
    imgSrc: "/images/banner-home.png",
    src: "/pdf/12X12.pdf",
  },
  {
    id: 5,
    name: "16X16 New Luton",
    imgSrc: "/images/banner-home.png",
    src: "/pdf/12X12.pdf",
  },
];

export default function Page() {
  return (
    <div className="container py-8 flex flex-col gap-8">
      <h1 className="text-6xl text-center max-lg:text-4xl">Catelouge</h1>

      <div className="flex flex-wrap gap-6 max-lg:flex-col max-lg:gap-4">
        {data.map((item) => {
          return (
            <Link
              href={item.src}
              target="_blank"
              key={item.id}
              className="py-4 w-[32%] flex flex-col gap-2 max-lg:w-[100%]"
            >
              <Image
                src={item.imgSrc}
                width={100}
                alt="pro-img"
                height={100}
                unoptimized
                className="w-full h-[25rem] object-cover rounded-lg"
              />
              <p className="text-xl font-semibold">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
