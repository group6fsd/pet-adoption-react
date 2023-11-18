import ImgCategory1 from "../../../assets/images/animal-1.png";
import ImgCategory2 from "../../../assets/images/animal-2.png";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <section className="bg-gradient-to-r from-amber-500 to-purple-800 pt-12">
        <div className="bg-gradient-to-r from-amber-500 to-purple-800">
          <div className="flex flex-wrap mt-[80px] rounded-xl ">
            <div className="w-full px-2 py-4 flex justify-center text-center  gap-[100px]">
              <Link to="/dogs" className="">
                <div>
                  <img
                    src={ImgCategory1}
                    alt=""
                    className="flex hover:scale-125 hover:rounded-xl"
                  />
                  <p className="font-bold text-4xl text-white hover:text-fuchsia-950">
                    Dogs
                  </p>
                </div>
              </Link>

              <Link to="/cats" className="">
                <div>
                  <img
                    src={ImgCategory2}
                    alt=""
                    className="flex hover:scale-125 hover:rounded-xl"
                  />
                  <p className="font-bold text-4xl text-white hover:text-fuchsia-950">
                    Cats
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
