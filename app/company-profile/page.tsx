import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div>
      <div>
        <div className="container py-[5rem] flex flex-col items-center justify-start gap-[5rem] max-lg:gap-[3rem]">
          <h1 className="text-6xl max-lg:text-4xl">Company Profile</h1>
          <div className="flex justify-between items-start max-lg:flex-col-reverse max-lg:gap-8">
            <div className="flex-[0_0_45%] flex flex-col justify-start items-start gap-8">
              <p>
                We are Morbi, Gujarat based manufacturer and supplier of major
                tiles products: 300 x 300 mm Digital Parking tiles. In the very
                short span of our endeavour, we have won the trust of many
                clients with our never-before quality preposition. Luton is the
                company with all the major certification and accreditation. We
                are also premier company for our best quality products. With the
                wide range of our products and quality services, we have made
                our name in the top companies of our sector.
              </p>
              <p>
                We believe that our strength lies within our esteemed dealers,
                distributors and finally with the end-users. We look forward to
                gain the same enthusiasm and trust from them.
              </p>
            </div>
            <div className="flex-[0_0_45%]">
              <Image
                src={"/images/company.jpg"}
                alt="company"
                height={100}
                width={100}
                className="w-full h-[40rem]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <h1 className="text-6xl text-center mb-[5rem] max-lg:text-4xl max-lg:mb-[3rem]">
            Who We Are ?
          </h1>

          <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-8">
            <div className="flex-[0_0_45%] flex flex-col items-start justify-start gap-8">
              <p>
                The ceramic industry has always been the most tradition-driven
                units of manufacturing. We at Luton thought something different
                and made the unit technology-intensive.
              </p>
              <p>
                Manufacturing tiles and delivering them in market have never
                seen the new thinking and new ways of application required
                dedication of the entire team. We brought in that effort to fill
                the gap of most-sort out unit of professional tiles
                manufacturing. The manufacturing to testing to final dispatch,
                we at Luton uses the best technology and delivers the best
                results.
              </p>
            </div>
            <div className="flex-[0_0_45%] max-lg:flex-[0_0_100%] max-lg:w-full">
              <Accordion type="single" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-2xl pt-0">
                    Our Vision
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Luton Ceramic, is committed to achieving operational
                    excellence and becoming one of the foremost players in the
                    tile industry.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-2xl">
                    Our Mission
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <p className="text-lg">
                      At Luton, we strive to fully utilize our production
                      capacity and use advanced technology. We transform this
                      into value for developers, distributors, homeowners and
                      all customers through good quality, competitive pricing,
                      product customization, flexibility, on-time delivery and
                      reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-2xl">
                    Our Values
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    <p className="text-lg">
                      Identify our CUSTOMERS&apos; NEEDS: At Luton, we believe
                      that customers don&apos;t only buy products. They buy good
                      customer service and solutions to their problems and
                      doubts. The more we put our hearts in the work to get
                      closer to customers the more we understand their needs and
                      meet their requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
