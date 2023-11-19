import Navbar from "../components/molecules/Navbar";
import Animal from "../assets/images/animal-1.png";

import Footer from "../components/molecules/Footer";

import { Link } from "react-router-dom";

function PetDetail() {
  return (
    <>
      <div className="pet-detail">
        <section className="w-full h-[100px] bg-gradient-to-r from-amber-500 to-purple-800 rounded-bl-[50px] rounded-br-[50px]">
          <Navbar />
        </section>
        <section className="container mx-auto -mt-6 ">
          <div className="flex mt-3">
            <div className="w-2/3 mr-6">
              <div className="bg-white p-3 mb-3 border border-gray-400 rounded-3xl shadow-lg">
                <figure className="item-image">
                  <img src={Animal} alt="" className="rounded-3xl w-full h-[450px] object-cover" />
                </figure>
              </div>
              <div className="flex -mx-2">
                <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-3xl shadow-lg">
                  <figure className="item-thumbnail">
                    <img src={Animal} alt="" className="rounded-3xl w-full" />
                  </figure>
                </div>
                <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-3xl shadow-lg">
                  <figure className="item-thumbnail">
                    <img src={Animal} alt="" className="rounded-3xl w-full" />
                  </figure>
                </div>
                <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-3xl shadow-lg">
                  <figure className="item-thumbnail">
                    <img src={Animal} alt="" className="rounded-3xl w-full" />
                  </figure>
                </div>
                <div className="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-3xl shadow-lg">
                  <figure className="item-thumbnail">
                    <img src={Animal} alt="" className="rounded-3xl w-full" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-white w-full p-5 border border-gray-400 rounded-3xl shadow-lg sticky top-15px">
                <div className="flex">
                  <h3 className="font-semibold font-[Poppins] text-lg">Tyson</h3>
                </div>
                <div className="flex mt-3 mb-3">
                  <p className="font-light text-md text-gray-400">A B O U T</p>
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <p className="font-semibold text-md">Age</p>
                    <p className="font-semibold text-md">Gender</p>
                    <p className="font-semibold text-md">Breed</p>
                    <p className="font-semibold text-md">Color</p>
                  </div>
                  <div className="w-1/2">
                    <p className="font-light text-md text-gray-600">2 years</p>
                    <p className="font-light text-md text-gray-600">Male</p>
                    <p className="font-light text-md text-gray-600">Chihuahua</p>
                    <p className="font-light text-md text-gray-600">Black</p>
                  </div>
                </div>
                <input type="number" placeholder="Enter Amount" className="border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline" />
                <Link to="/fund-success" className="text-center mt-3 block w-full border border-green-500 hover:bg-green-500 hover:text-white  font-medium px-6 py-3 text-md rounded-full">
                  Fund Now
                </Link>
              </div>
              <button className="text-center mt-3 button-cta block w-full bg-orange-500 hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full">Adopt Now</button>
            </div>
          </div>
        </section>
        <section className="container mx-auto pt-8">
          <div className="w-full bg-white p-5 mb-10 border border-gray-400 rounded-3xl shadow-lg">
            <div className="flex mb-3 ">
              <h3 className="font-semibold font-[Poppins] text-xl">Description</h3>
            </div>
            <div>
              <p className="font-light text-xl mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis rem corrupti nisi error, ipsa, aliquam fuga voluptate at cum consectetur, illo repellat totam nesciunt inventore consequatur quasi neque voluptatibus
                dolorem.
              </p>
              <hr className="border-[1px] outline-none w-full border-gray-300" />
            </div>
            <div className="mt-5">
              <h3 className="font-semibold font-[Poppins] text-xl">Favorite Things</h3>
              <div className="flex gap-3 items-center flex-wrap">
                <div className="p-1 px-4 bg-orange-500 text-white rounded-full">Playing with toys</div>
                <div className="p-1 px-4 bg-orange-500 text-white rounded-full">Cuddle on Sofa</div>
                <div className="p-1 px-4 bg-orange-500 text-white rounded-full">Walking</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default PetDetail;
