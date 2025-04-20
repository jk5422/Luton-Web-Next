import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="container flex flex-col items-center gap-[5rem] py-[5rem]">
        <h1 className="text-6xl text-center max-lg:text-4xl">
          Our Infrastructure
        </h1>

        <div className="flex flex-wrap gap-10 max-lg:flex-col max-lg:w-full">
          <Image
            src="/images/i-1.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-2.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-3.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-4.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-5.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-6.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-7.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-8.jpg"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
          <Image
            src="/images/i-9.png"
            alt="logo"
            width={200}
            height={200}
            className="flex-[0_0_31.3%] rounded-xl max-lg:flex-[0_0_100%] max-lg:w-full max-lg:min-h-[25rem] max-lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
}
