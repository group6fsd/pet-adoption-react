import Footer from "../components/molecules/Footer";
import Hero from "../components/molecules/Hero/Index";
import Navbar from "../components/molecules/Navbar";
import Service from "../components/molecules/Service";
import AnimalRescue from "../components/organisems/AnimalRescue";
import ContactUs from "../components/organisems/ContactUs";
export default function Home() {
  return (
    <>
      <body className="bg-gradient-to-br from-amber-500 to-purple-800">
        <Navbar />
        <Hero />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="mt-[-80px] lg:mt-[-200px] md:mt-[-160px]">
          <path
            fill="#fafcff"
            fillOpacity="1"
            d="M0,96L24,106.7C48,117,96,139,144,133.3C192,128,240,96,288,80C336,64,384,64,432,69.3C480,75,528,85,576,117.3C624,149,672,203,720,202.7C768,203,816,149,864,122.7C912,96,960,96,1008,128C1056,160,1104,224,1152,213.3C1200,203,1248,117,1296,85.3C1344,53,1392,75,1416,85.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
        <Service />
        <AnimalRescue />
        <ContactUs />
        <Footer />

        <a href="#home" id="back-to-top" className="hidden justify-center items-center h-14 w-14 bg-orange-500 rounded-full fixed z-index-[999] bottom-4 right-4 p-4 hover:animate-pulse">
          <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
        </a>
      </body>
    </>
  );
}
