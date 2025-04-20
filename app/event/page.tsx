export default function Page() {
  return (
    <div className="container py-8 flex flex-col gap-8">
      <h1 className="text-6xl text-center max-lg:text-4xl">
        Event & Exhibition
      </h1>

      <div className="w-full flex flex-col items-center justify-center gap-6">
        <iframe
          src="https://www.youtube.com/embed/kYdZM6cDfAg?si=8zbcs6r_Xk2wffal"
          allowFullScreen
          className="w-[70%] h-[35rem] rounded-lg max-lg:w-[100%] max-lg:h-[20rem]"
        />

        <p className="text-2xl font-semibold">Vibrant Ceramic 2016</p>
        <p className="text-center text-lg">
          Pursuing the idea of our honorable Prime Minister Mr. Narendra Modi to
          see India proliferate in the corporate and commercial realms across
          the world by providing the optimal combination of skilled human
          resource and state-of-the-art technology; Vibrant Ceramics 2016 will
          be an ideal portal to meet, interact, network and discuss business
          possibilities for industrialists, dealers, customers, experts and all
          those who matter in the Ceramics Industry.
        </p>
      </div>
    </div>
  );
}
