import Image from "next/image";

export default function Page() {
  return (
    <div className="container py-8 flex flex-col justify-center items-center gap-8 w-full">
      <h1 className="text-6xl text-center max-lg:text-4xl">
        Technical Specification
      </h1>

      <Image
        src={"/images/banner-home.png"}
        alt="size"
        width={100}
        height={100}
        unoptimized
        className="w-full h-[80vh] object-cover max-lg:h-[50vh]"
      />
    </div>
  );
}
