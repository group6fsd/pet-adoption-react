import DogCategory from "../../../assets/images/DogCategory.png";
import CatCategory from "../../../assets/images/CatCategory.png";
import { Link } from "react-router-dom";
function Category() {
  return (
    <>
      {/* Title */}
      <div className="w-full px-4 text-center mb-10 mt-20">
        <h4 className="font-[Poppins] font-bold text-base text-white mb-10 sm:text-xl lg:text-2xl">Choose the categories</h4>
      </div>
      {/* Option */}
      <div className="flex w-full justify-center gap-5 overflow-hidden px-5 sm:px-14 md:px-32 lg:px-40">
        {/* Dogs */}

        <Link to="/dogs" className="flex-1 sm:flex-none cursor-pointer hover:brightness-90 sm:w-56 aspect-square shrink-0 relative rounded-xl overflow-hidden">
          <img src={DogCategory} alt="Dog" className="w-full h-full object-cover hover:scale-110 transition duration-300" />
          <div className="font-semibold absolute bottom-1 right-3 flex items-center gap-1">
            <hr className="border-[1px] outline-none w-12" />
            <span className="text-white">DOGS</span>
          </div>
        </Link>
        {/* Cats */}
        <Link to="/cats" className="flex-1 sm:flex-none cursor-pointer hover:brightness-90 sm:w-56 aspect-square shrink-0 relative rounded-xl overflow-hidden">
          <img src={CatCategory} alt="Cat" className="w-full h-full object-cover hover:scale-110 transition duration-300" />
          <div className="font-semibold absolute bottom-1 right-3 flex items-center gap-1">
            <hr className="border-[1px] outline-none w-12" />
            <span className="text-white">CATS</span>
          </div>
        </Link>
      </div>
      ;
    </>
  );
}

export default Category;
