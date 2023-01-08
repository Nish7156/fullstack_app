import React from "react";
import SideFilter from "./SideFilter";
import Test from "./Test";

function Products() {
  return (
    <div className="flex bg-white border-t border-solid border-border-200 border-opacity-70">
      <SideFilter />
      <Test/>
    </div>
  );
}

export default Products;
