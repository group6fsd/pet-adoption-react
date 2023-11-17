import Footer from "../components/molecules/Footer";

import Navbar from "../components/molecules/Navbar";
import Pet from "../components/molecules/Pet";

function ShowPet() {
  return (
    <body className="">
      <div className="w-full h-[100px] bg-gradient-to-r from-amber-500 to-purple-800 rounded-bl-[50px] rounded-br-[50px]">
        <Navbar />
        <Pet />
        <Footer />
      </div>
    </body>
  );
}

export default ShowPet;
