import ButtonComponent from "@/components/buttonComponent";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const data = [
  [
    {
      id: 1,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 2,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 3,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 4,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 5,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 6,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 7,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 8,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 9,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 10,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 11,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 12,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 13,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
  ],
  [
    {
      id: 1,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 2,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 3,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 4,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 5,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 6,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 7,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 8,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 9,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 10,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 11,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 12,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 13,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
  ],
  [
    {
      id: 1,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 2,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 3,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 4,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 5,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 6,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 7,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 8,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 9,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 10,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 11,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 12,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
    {
      id: 13,
      imgsrc: "/images/banner-home.png",
      designNo: 3226,
      size: "300*300MM",
    },
  ],
];

type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Fix: Required for dynamic routes in Next.js App Router
export async function generateStaticParams() {
  return [
    { slug: "digitalparking" },
    { slug: "digitalheavyduty" },
    { slug: "digitalwall" }, // add any other possible slugs here
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const proData =
    slug === "digitalparking"
      ? data[0]
      : slug === "digitalheavyduty"
        ? data[1]
        : data[2];

  return (
    <div className="container flex flex-col gap-6 py-8">
      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-4 max-lg:items-start">
        <p className="text-2xl">
          {slug === "digitalparking" ? "12x12MM Digital Parking Tiles" : null}
        </p>
        <div className="flex-[0_0_30%] flex justify-start gap-2 max-lg:flex-[0_0_100%] max-lg:w-full">
          <Input type="text" placeholder="Search Design No" />
          <ButtonComponent name="Search" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6 max-lg:flex-col max-lg:gap-y-10">
        {proData.map((item) => (
          <div key={item.id} className="flex-[0_0_32%] flex flex-col gap-2">
            <Image
              src={item.imgsrc}
              alt="img"
              width={100}
              height={100}
              unoptimized
              className="object-cover w-full h-[30rem] rounded-lg max-lg:h-[25rem]"
            />
            <div className="flex flex-col gap-2 text-lg">
              <p>
                Design No :{" "}
                <span className="font-semibold">{item.designNo}</span>
              </p>
              <p>
                Size: <span className="font-semibold">{item.size}</span>
              </p>
              <ButtonComponent name="Add To Inquiry" classnames="w-min" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
