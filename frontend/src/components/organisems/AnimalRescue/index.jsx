import animal1 from "../../../assets/images/animal-1.png";
import animal2 from "../../../assets/images/animal-2.png";
import animal3 from "../../../assets/images/animal-3.png";
import animal4 from "../../../assets/images/animal-4.png";
import animal5 from "../../../assets/images/animal-5.png";
import animal6 from "../../../assets/images/animal-6.png";

export default function AnimalRescue() {
  return (
    <>
      <section className="bg-slate-600 pt-12 pb-32">
        <div className="container">
          <div className="w-full px-4 text-center mb-10">
            <h4 className="font-[Poppins] font-bold text-3xl text-white mb-4 sm:text-4xl lg:text-5xl">New Animal Rescue</h4>
          </div>
          <div className="flex flex-wrap bg-white shadow-lg rounded-xl">
            <div className="w-full px-2 py-4 flex justify-start overflow-x-scroll gap-3">
              <img src={animal1} alt="" className="flex" />
              <img src={animal2} alt="" className="flex" />
              <img src={animal3} alt="" className="flex" />
              <img src={animal4} alt="" className="flex" />
              <img src={animal5} alt="" className="flex" />
              <img src={animal6} alt="" className="flex" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
