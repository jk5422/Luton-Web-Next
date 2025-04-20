import ButtonComponent from "@/components/buttonComponent";
import { CarouselComponent } from "@/components/carouselComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <video
          src="/images/video.mp4"
          className="h-[90vh] w-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 opacity-50 h-full w-full bg-Black-100 z-[1]"></div>

        <div className="content absolute top-[50%] translate-y-[-50%] left-[5%] leading-[1.5] z-[2]">
          <p>May Be Need</p>
          <h1 className="text-6xl font-bold text-white max-lg:text-4xl">
            Exclusive Ceramics <br /> & Pottery Retailer
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            quasi?
          </p>
          <Link href="/">
            <ButtonComponent name="SHOP NOW" classnames="mt-6" />
          </Link>
        </div>
      </div>

      <div>
        <div className="container py-[5rem] text-center flex flex-col items-center gap-8">
          <div>
            <h1 className="text-6xl max-lg:text-4xl">Infrastructure</h1>
            <p className="pt-2">
              Innovation becomes not merely an aim but the underlying motor of a
              new strategy
            </p>
          </div>

          <ul className="text-left flex flex-col gap-2 list-disc max-lg:pl-4">
            <li>
              Company has excellent Transportation facilities to deliver the
              products across the world.
            </li>
            <li>
              We have best country wide distribution network, paradoxically all
              products have single location storage.
            </li>
            <li>
              The supremely qualified technical team looks after all technical
              queries across India.
            </li>
            <li>
              We are also proud owners of best depots and warehouses network
              across India.
            </li>
            <li>
              Our supply chain too, is at acme which is segregated as per zones,
              districts and states.
            </li>
            <li>
              We also take up the responsibility of supplying any application
              related resources for tile fixing across India.
            </li>
          </ul>

          <ButtonComponent name="View Infrastructure" />
        </div>
      </div>

      <div>
        <div className="container py-[5rem] flex flex-col gap-[5rem]">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-6xl mb-4 max-lg:text-4xl">Why Choose Us</h1>
            <p className="pt-2 w-[60%] text-center max-lg:w-[100%]">
              Manufacturing tiles and delivering them in market have never seen
              the new thinking and new ways of application required dedication
              of the entire team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 max-lg:flex-col">
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl max-lg:text-2xl">GLOBAL EXPORT AREA</p>
              <p>
                Manufacturing & Export Tiles & Export Hub In Asia To The Globe.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl max-lg:text-2xl">RESEARCH & DEVELOPMENT</p>
              <p>
                Research for creative and innovative tiles design and develope
                this idea in tiles.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl max-lg:text-2xl">SUPREME QUALITY</p>
              <p>
                The Quality of the Parking Tiles with judge quality and premium
                quality of products on a continuing basis.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl max-lg:text-2xl">ADVANCED TECHNOLOGY</p>
              <p>
                Luton Ceramic Pvt. Ltd. has perfected the techniques. Its tiles
                the most durable and appealing in the market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our products  */}
      <div>
        <div className="container py-[5rem]">
          <h1 className="mb-[5rem] text-center text-6xl max-lg:text-4xl max-lg:mb-[3rem]">
            Our Products
          </h1>
          <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-8">
            <div className="slider flex-[0_0_48%] max-lg:flex-[0_0_100%]">
              <CarouselComponent
                data={[
                  "/images/about.jpg",
                  "/images/about-2.jpg",
                  "/images/about-3.jpg",
                ]}
              />
            </div>
            <div className="content flex-[0_0_48%] flex flex-col gap-8 max-lg:flex-[0_0_100%] max-lg:w-full">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-2xl">
                    Digital Parking Tiles
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Our product range includes a wide range of 300 x 300 MM
                    (12&quot; x 12&quot;) Digital Parking Tiles.We hold
                    expertise in this field, as we are manufacturing, exporting
                    and supplying to our valuable clients a premium quality
                    range of 300x300 Digital Parking Tiles in Morbi, Gujarat,
                    India.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-2xl">
                    Is it styled?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                      <li>Simple installation</li>
                      <li>High strength</li>
                      <li>Crack resistance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <ButtonComponent name="View All Products" classnames="w-min" />
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div>
        <div className="container py-[5rem]">
          <h1 className="mb-[5rem] text-6xl text-center max-lg:mb-[3rem]">
            About Us
          </h1>

          <div className="flex justify-between items-start max-lg:flex-col-reverse max-lg:gap-8">
            <div className="flex-[0_0_48%] flex flex-col gap-8 text-lg">
              <p>
                We are Morbi, Gujarat based manufacturer and supplier of major
                tiles products: 300 x 300 mm Digital Parking tiles. In the very
                short span of our endeavour, we have won the trust of many
                clients with our never-before quality preposition. Luton is the
                company with all the major certification and accreditation.
              </p>
              <p>
                Luton is the company with all the major certification and
                accreditation. We are also premier company for our best quality
                products. With the wide range of our products and quality
                services.
              </p>
              <ButtonComponent name="Read More" classnames="w-min" />
            </div>

            <div className="flex-[0_0_48%]">
              <Image
                src={"/images/about-us.jpg"}
                alt={"image"}
                width={100}
                height={100}
                className="h-[35rem] w-full object-cover rounded-lg max-lg:h-[25rem]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export  */}
      <div>
        <div className="container py-[5rem]">
          <h1 className="text-6xl text-center mb-8 max-lg:text-4xl:">Export</h1>

          <div className="flex flex-col justify-center items-center gap-8 text-center text-lg w-[60%] mx-auto max-lg:w-[100%] max-lg:gap-4">
            <p>
              For oversseas client we Luton Ceramic Pvt. Ltd. are one stop
              solution for their ceramic tiles requirements, because Luton
              Ceramic Pvt. Ltd. companies has 1 manufacturing plant in India for
              tiles. Luton Ceramic Pvt. Ltd. has satisfied the requirements of
              countless buyers that represent more than 10 countries. Every
              Tiles and product that we produce caries the stamp of world class
              quality.
            </p>
            <p>
              Luton Ceramic Pvt. Ltd. has satisfied the requirements of
              countless buyers that represent more than 10 countries. Every
              Tiles and product that we produce caries the stamp of world class
              quality.
            </p>

            <ButtonComponent name="Know About Export Area" classnames="w-min" />
          </div>
        </div>
      </div>
    </div>
  );
}
