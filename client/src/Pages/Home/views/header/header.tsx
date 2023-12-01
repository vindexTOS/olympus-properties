import React from "react";
import Filter from "./components/Filter";
function header() {
  return (
    <div className="bg-brand-green/60 w-[100%] h-[600px] flex flex-col gap-20 items-center justify-between ">
      <h1 className="text-[4rem] w-[55%] font-bold text-brand-white text-center">
        The #1 site real estate professionals trust*
      </h1>
      <Filter />
    </div>
  );
}

export default header;
