import Navbar from "../components/molecules/Navbar";
import Footer from "../components/molecules/Footer";
import DogCategory from "../components/organisems/Category/DogsCategory";

function ShowCategoryDog() {
  return (
    <>
      <body className="">
        <div className="w-full h-[100px] bg-gradient-to-r from-amber-500 to-purple-800 rounded-bl-[50px] rounded-br-[50px]">
          <Navbar />
          <DogCategory />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default ShowCategoryDog;
