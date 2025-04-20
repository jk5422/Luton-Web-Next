import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div>
        <div className="container py-[5rem]">
          <h1 className="text-6xl text-center mb-[5rem] max-lg:text-4xl max-lg:mb-[3rem]">
            Export
          </h1>

          <div className="flex items-start justify-between max-lg:flex-col-reverse max-lg:gap-8">
            <div className="flex-[0_0_45%] flex flex-col justify-start items-start gap-8">
              <p>
                We do realize that long-term business can only be made with
                high-quality products, economical prices, quick delivery and
                speedy service. Hence, the building of mutual trust and
                confidence by exporting products with value constantly stay at
                the top of our company policy.
              </p>
              <p>
                As a distinguished tile exporter in India, Luton Ceramic Pvt.
                Ltd. endows their customers with a comprehensive range of tiles
                best for use in interior decor of floors in residential &
                commercial spaces. We are a leading manufacturer of tiles in
                India dealing with advanced technology. We have been exporting
                the tiles for years now and delight in the beauty of our
                exquisite range of tiles that we supply to our customers
                spanning the globe.
              </p>
            </div>
            <div className="flex-[0_0_45%]">
              <Image
                src={"/images/export.jpg"}
                alt="export"
                width={100}
                height={500}
                className="h-[40rem] w-full object-cover rounded-lg max-lg:h-[30rem]"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container py-[5rem] flex flex-col gap-[5rem]">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-6xl mb-4 max-lg:text-4xl">Why Choose Us</h1>
            <p className="pt-2 w-[60%] text-center max-lg:w-full">
              Manufacturing tiles and delivering them in market have never seen
              the new thinking and new ways of application required dedication
              of the entire team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 max-lg:flex-col">
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl">GLOBAL EXPORT AREA</p>
              <p>
                Manufacturing & Export Tiles & Export Hub In Asia To The Globe.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl">RESEARCH & DEVELOPMENT</p>
              <p>
                Research for creative and innovative tiles design and develope
                this idea in tiles.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl">SUPREME QUALITY</p>
              <p>
                The Quality of the Parking Tiles with judge quality and premium
                quality of products on a continuing basis.
              </p>
            </div>
            <div className="flex-[0_0_48%] p-8 border-[1px] border-Black-100 rounded-md flex flex-col gap-4 max-lg:p-6">
              <p className="text-3xl">ADVANCED TECHNOLOGY</p>
              <p>
                Luton Ceramic Pvt. Ltd. has perfected the techniques. Its tiles
                the most durable and appealing in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
