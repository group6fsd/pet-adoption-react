import Navbar from "../components/molecules/Navbar";
import Footer from "../components/molecules/Footer";
import CatCategory from "../components/organisems/Category/CatsCategory";

function ShowCategoryCat() {
  return (
    <>
      <body className="">
        <div className="w-full h-[100px] bg-gradient-to-r from-amber-500 to-purple-800 rounded-bl-[50px] rounded-br-[50px]">
          <Navbar />
          <CatCategory />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default ShowCategoryCat;
