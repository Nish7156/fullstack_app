import React from 'react'

function Header() {
  return (
    <>
        <header className="site-header-with-search h-14 md:h-16 lg:h-22 lg:!h-auto">
   <div className="fixed z-50 flex items-center justify-between w-full px-4 py-5 transition-transform duration-300 bg-white border-b shadow-sm h-14 transform-gpu border-border-200 bg-light md:h-16 lg:h-22 lg:px-8">
      <div className="flex items-center w-full lg:w-auto">
         <a className="inline-flex mx-auto lg:mx-0" href="/"><span className="relative w-32 h-10 overflow-hidden md:w-40"><span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img alt="Pickbazar" sizes="100vw" srcset="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" className="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:contain"/></span></span></a>
         <div className="hidden ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto xl:block">
            <div className="relative inline-block ltr:text-left rtl:text-right">
               <button className="flex items-center text-sm font-semibold rounded h-11 shrink-0 text-heading focus:outline-none md:text-base xl:px-4 border-border-200 bg-light xl:min-w-150 xl:border xl:text-accent" id="headlessui-menu-button-1" type="button" aria-haspopup="true" aria-expanded="false">
                  <span className="flex items-center justify-center w-5 h-5 ltr:mr-2 rtl:ml-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20.347" height="24.101" viewBox="0 0 20.347 24.101" fill="currentColor" className="max-w-full max-h-full">
                        <g id="Grocery" transform="translate(-39.481 0.052)">
                           <path id="Path_17386" data-name="Path 17386" d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z" transform="translate(-294.289 -380.346)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path>
                           <path id="Path_17387" data-name="Path 17387" d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z" transform="translate(-0.5)" fill="currentColor" stroke="currentColor" stroke-width="0.1"></path>
                        </g>
                     </svg>
                  </span>
                  <span className="whitespace-nowrap">Grocery</span>
                  <span className="flex pt-1 ltr:ml-auto ltr:pl-2.5 rtl:mr-auto rtl:pr-2.5">
                     <svg width="10" height="6" viewBox="0 0 10 6">
                        <path d="M128,192l5,5,5-5Z" transform="translate(-128 -192)" fill="currentColor"></path>
                     </svg>
                  </span>
               </button>
            </div>
         </div>
      </div>
      <ul className="items-center hidden shrink-0 space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
         <li><a className="flex items-center font-normal no-underline transition duration-200 text-heading hover:text-accent focus:text-accent" href="/shops">Shops</a></li>
         <li><a className="flex items-center font-normal no-underline transition duration-200 text-heading hover:text-accent focus:text-accent" href="/offers">Offers</a></li>
         <li><a className="flex items-center font-normal no-underline transition duration-200 text-heading hover:text-accent focus:text-accent" href="/help">FAQ</a></li>
         <li><a className="flex items-center font-normal no-underline transition duration-200 text-heading hover:text-accent focus:text-accent" href="/contact">Contact</a></li>
         <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a href="https://pickbazar-react-admin.vercel.app/register" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-3 py-0 text-sm font-semibold leading-none transition duration-300 ease-in-out bg-red-900 border border-transparent rounded outline-none h-9 shrink-0 bg-accent text-light hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700">Become a Seller</a>
            <li><button data-variant="normal" className="inline-flex items-center justify-center px-3 py-0 text-sm font-semibold leading-none transition duration-300 ease-in-out border border-transparent rounded outline-none lg:h-10 shrink-0 focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light hover:bg-accent-hover h-9">Join</button></li>
         </div>
      </ul>
   </div>
</header>
    </>
  )
}

export default Header