import React from 'react'

function HeroBanner() {
  return (
    <div className=''>
        <div className="relative hidden lg:block">
   <div className="overflow-hidden -z-1">
      <div className="relative">
         <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" id="banner">
            <div className="swiper-wrapper transform: translate3d(0px, 0px, 0px);">
               <div className="swiper-slide swiper-slide-active ">
                  <div className="relative w-full h-screen">
                     <span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img alt="Groceries Delivered in 90 Minute" src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=3840&q=75"/></span>
                     <div className="absolute inset-0 flex flex-col items-center justify-center w-full p-5 mt-8 text-center md:px-20 lg:space-y-10">
                        <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">Groceries Delivered in 90 Minute</h1>
                        <p className="text-sm text-heading lg:text-base xl:text-lg">Get your healthy foods &amp; snacks delivered at your doorsteps all day everyday</p>
                        <div className="w-full max-w-3xl">
                           <form className="w-full">
                              <div className="relative flex rounded md:rounded-lg h-14 shadow-900">
                                 <label for="search" className="sr-only">search</label><input type="text" id="search" value="" autocomplete="off" className="flex w-full h-full overflow-hidden text-sm placeholder-gray-500 truncate transition duration-300 ease-in-out border border-transparent rounded-lg appearance-none search item-center text-heading focus:outline-none focus:ring-0 bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none ltr:border-r-0 rtl:border-l-0 focus:border-accent" name="search" placeholder="Search your products from here"/>
                                 <button className="flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none bg-green-400 text-white">
                                    <svg viewBox="0 0 17.048 18" className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5">
                                       <path d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" transform="translate(-367.297 -371.285)" fill="currentColor"></path>
                                    </svg>
                                    Search
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}

export default HeroBanner