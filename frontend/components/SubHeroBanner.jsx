import Image from "next/image";
import React from "react";
import img1 from "../public/images/banner-1.png";

function SubHeroBanner() {
  return (
    <div className="bg-white">
      <div class="mx-auto max-w-[1920px] px-4 md:px-6 pt-8 lg:px-8 2xl:px-10">
        <div class="my-3 md:my-4 lg:mt-0 lg:mb-5 xl:mb-6">
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 2xl:gap-5">
            <div class="mx-auto">
              <a
                class="h-full group flex justify-center relative overflow-hidden"
                href="/search"
              >
                <span className="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                  <Image
                    src={img1}
                    alt="test"
                    width={800}
                    height={200}
                    objectFit="fill"
                    className=""
                  />
                </span>
                <div class="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"></div>
              </a>
            </div>
            <div class="mx-auto">
              <a
                class="h-full group flex justify-center relative overflow-hidden"
                href="/search"
              >
                <span className="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                  <Image src={img1} alt="test" width={800} height={200} />
                </span>
                <div class="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeroBanner;
