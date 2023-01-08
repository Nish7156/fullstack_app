import Image from "next/image";
import React from "react";
import img1 from "../public/images/clementines.png";

const P = () => {
  return (
    <article className="product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow">
      <div className="relative flex items-center justify-center w-auto h-48 cursor-pointer sm:h-64">
        <span className="sr-only">Product Image</span>
        <span>
          <Image alt="Apples" src={img1} width={900} height={500} />
        </span>
        <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
          20%
        </div>
      </div>
      <header className="p-3 bg-white md:p-6">
        <div className="flex items-center mt-20 mb-2 lg:mt-0">
          <span className="text-sm font-semibold text-heading md:text-base">
            $1.60
          </span>
          <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
            $2.00
          </del>
        </div>
        <h3 className="mt-4 mb-4 text-xs truncate cursor-pointer text-body md:text-sm">
          Apples
        </h3>
        <button className="flex items-center justify-between w-full h-10 text-xs transition-colors bg-gray-100 rounded group text-body-dark hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:text-sm">
          <span className="flex-1">Add</span>
          <span className="grid w-10 h-10 transition-colors duration-200 bg-gray-200 place-items-center group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </span>
        </button>
      </header>
    </article>
  );
};

function Test() {
  return (
    <div>
      <div>
        <div className="w-full px-4 pb-8 bg-gray-400 lg:p-8">
          <div className="w-full overflow-y-auto">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              <P />
              <P />
              <P />
              <P />
              <P />
              <P />
              <P />
              <P />
              <P />
              <P />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
