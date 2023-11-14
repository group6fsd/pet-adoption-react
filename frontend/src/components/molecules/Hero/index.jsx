import cathero from "../../../assets/images/cat-hero.png";

function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="w-full flex justify-center">
          <div className="relative">
            <img src={cathero} alt="Cat Thumbnail" className="shadow-lg rounded-lg" />
            <h1 className="font-[Poppins] text-base text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-4xl md:text-2xl sm:text-xl">Want to adopt some animals?</h1>
            <a href="#" className="bg-orange-500 px-2 py-1 text-white text-sm rounded-lg shadow-lg absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-10/12 lg:text-2xl lg:py-2 lg:px-4 md:text-xl">
              <i className="fa-solid fa-paw mr-2"></i>Explore Pets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
