import React from "react";
import Navbar from "../components/molecules/Navbar";
import Category from "../components/organisems/Category";

export default function ShowCategory() {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-purple-800 pt-36 h-[150vh] lg:h-[100vh]">
      <Navbar />
      <Category />
    </div>
  );
}
