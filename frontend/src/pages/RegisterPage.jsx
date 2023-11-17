import { Link } from "react-router-dom";
import logoGoogle from "../assets/images/google.svg";
import authBg from "../assets/images/Saly-14.png";

function Register() {
  return (
    <div className="w-full h-full relative bg-white">
      {/* title */}
      <div
        className="left-[42px] top-0 absolute text-black text-[20px] font-[600] break-words"
        style={{ fontFamily: "Poppins" }}
      >
        pet adoption
      </div>

      {/* start content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center pt-24">
        <div
          className="bg-no-repeat bg-right-bottom w-[630px] h-[665px] left-[108ox] top-[285px] text-center"
          style={{ backgroundImage: `url(${authBg})` }}
        >
          <div className="">
            <h2
              className="text-black font-semibold text-[50px] leading-[75px]"
              style={{ fontFamily: "Poppins" }}
            >
              Sign Up to
            </h2>
            <h3
              className="text-black font-med ium text-[35px] leading-[52px]"
              style={{ fontFamily: "Poppins" }}
            >
              pet adoption
            </h3>
            <p
              className="text-black font-normal text-[16px] leading-[24px]"
              style={{ fontFamily: "Poppins" }}
            >
              If you already have an account, you can
            </p>
            <p
              className="text-[#4D47C3] font-semibold text-[16px] leading-[24px]"
              style={{ fontFamily: "Poppins" }}
            >
              <Link to="/sign-in">Login here !</Link>
            </p>
          </div>
        </div>

        <div className="w-[400px] h-[240px] left-0 top-0">
          <h2
            className="text-[30px] font-medium leading-[45px] pb-12"
            style={{ fontFamily: "Poppins" }}
          >
            Sign Up
          </h2>
          <form action="" style={{ fontFamily: "Poppins" }}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="w-full bg-slate-200 p-3 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 px-4 mb-8"
            />

            <input
              type="text"
              name="user_register"
              id="user_register"
              placeholder="Create Username"
              className="w-full bg-slate-200 p-3 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 px-4 mb-8"
            />

            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Contact Number"
              className="w-full bg-slate-200 p-3 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 px-4 mb-8"
            />

            <input
              type="password"
              name="password_register"
              id="password_register"
              placeholder="Password"
              className="w-full bg-slate-200 p-3 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 px-4 mb-8"
            />
            <input
              type="password"
              name="retype_password_register"
              id="retype_password_register"
              placeholder="Confirm Password"
              className="w-full bg-slate-200 p-3 rounded-lg focus:outline-none focus:ring-orange-500 focus:ring-1 focus:border-orange-500 px-4 mb-8"
            />

            <button className="w-full bg-cyan-600 text-white font-medium text-[16px] leading-[24px] py-3 px-8 rounded-[9px] hover:opacity-80 hover:shadow-lg transition duration-500">
              Login
            </button>
            <p className="text-gray-400 text-center font-normal text-[13px] leading-[19px] pt-8">
              Or continue with
            </p>
            <div className="flex justify-center pt-2">
              <a href="">
                <img className="object-center" src={logoGoogle} alt="" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
