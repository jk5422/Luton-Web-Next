"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

export function CarouselComponent({
  data,
  classnames,
}: {
  data: string[];
  classnames?: string;
}) {
  return (
    <Carousel
      className={classnames}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((itemSrc, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <div className="p-1 w-full h-full max-lg:p-0">
              <Image
                src={itemSrc}
                width={100}
                height={100}
                alt="image-carousel"
                className="h-[35rem] w-full object-cover rounded-lg max-lg:h-[25rem]"
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
