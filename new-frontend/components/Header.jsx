import React from "react";
import Image from "next/image";
import img1 from "../public/logo.svg";

function Header() {
  return (
    <div>
      <div className="hidden navbar bg-brand-light lg:block">
        <div className="flex items-center justify-between h-16 mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
          <a
            className="inline-flex w-0 transition-all duration-200 ease-in-out opacity-0 focus:outline-none navbar-logo"
            href="/"
          >
            <span className="box-sizing: border-box; display: inline-block; overflow: hidden; width: 128px; height: 30px; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;">
              <Image alt="BoroBazar" width={500} height={500} src={img1} />
            </span>
            vdsvsdv
          </a>
          <nav className="relative flex w-full -mx-3 transition-all duration-200 ease-in-out headerMenu xl:-mx-4">
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/"
              >
                Demos
                <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </span>
              </a>
              <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300  bg-red-400 ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                <ul className="py-5 text-sm text-brand-muted">
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/"
                    >
                      Modern
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/classic"
                    >
                      Classic
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/vintage"
                    >
                      Vintage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/search"
              >
                Categories
                <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </span>
              </a>
              <div className="absolute z-30 opacity-0 subMenu bg-red-400 shadow-dropDown transition-all duration-300  bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                <ul className="py-5 text-sm text-brand-muted">
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Fresh Vegetables
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Diet Nutrition
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Healthy Foods
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Grocery Items
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Beaf Steak
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/search"
              >
                Dietary
                <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </span>
              </a>
              <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 bg-red-400 bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                <ul className="py-5 text-sm text-brand-muted">
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Vegetarian
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Kakogenic
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Mediterranean
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/search"
                    >
                      Organic
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/search"
              >
                Search
              </a>
            </div>
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/shops"
              >
                Shops
              </a>
            </div>
            <div className="relative py-3 mx-3 cursor-pointer menuItem group xl:mx-4">
              <a
                className="relative inline-flex items-center py-2 text-sm font-normal lg:text-15px text-brand-dark group-hover:text-brand before:absolute before:w-0 before:ltr:right-0 rtl:left-0 before:bg-brand before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full ltr:group-hover:before:left-0 rtl:group-hover:before:right-0 lrt:group-hover:before:right-auto rtl:group-hover:before:left-auto"
                href="/"
              >
                Pages
                <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-brand-dark opacity-40 group-hover:text-brand">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </span>
              </a>
              <div className="absolute z-30 opacity-0 subMenu shadow-dropDown transition-all duration-300 bg-red-400 bg-brand-light ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
                <ul className="py-5 text-sm text-brand-muted">
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/"
                    >
                      Users
                      <span className="text-sm mt-0.5 shrink-0">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="transition duration-300 ease-in-out text-body group-hover:text-brand-dark"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                      </span>
                    </a>
                    <ul className="absolute z-0 w-56 py-3 transition-all duration-300 bg-red-400 opacity-0 subMenuChild shadow-subMenu bg-brand-light ltr:right-full rtl:left-full 2xl:ltr:right-auto 2xl:rtl:left-auto 2xl:ltr:left-full 2xl:rtl:right-full top-4">
                      <li className="relative">
                        <a
                          className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                          href="/my-account/account-settings"
                        >
                          My Account
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="relative">
                    <a
                      className="flex items-center justify-between py-2 ltr:pl-5 rtl:pr-5 xl:ltr:pl-7 xl:rtl:pr-7 ltr:pr-3 rtl:pl-3 xl:ltr:pr-3.5 xl:rtl:pl-3.5 hover:bg-fill-dropdown-hover hover:text-brand-dark"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center ltr:ml-auto rtl:mr-auto shrink-0">
            <div className="delivery-address">
              <button className="inline-flex items-center text-15px text-brand-dark tracking-[0.1px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0C5.27737 0 2.25 3.02737 2.25 6.75C2.25 11.4289 8.343 17.5759 8.60175 17.8358C8.712 17.9449 8.856 18 9 18C9.144 18 9.288 17.9449 9.39825 17.8358C9.657 17.5759 15.75 11.4289 15.75 6.75C15.75 3.02737 12.7226 0 9 0ZM9 16.6241C7.65675 15.1864 3.375 10.3241 3.375 6.75C3.375 3.64838 5.89838 1.125 9 1.125C12.1016 1.125 14.625 3.64838 14.625 6.75C14.625 10.3208 10.3433 15.1864 9 16.6241Z"
                    fill="#8C969F"
                  ></path>
                  <path
                    d="M9 3.375C7.13925 3.375 5.625 4.88925 5.625 6.75C5.625 8.61075 7.13925 10.125 9 10.125C10.8608 10.125 12.375 8.61075 12.375 6.75C12.375 4.88925 10.8608 3.375 9 3.375ZM9 9C7.75912 9 6.75 7.99088 6.75 6.75C6.75 5.50912 7.75912 4.5 9 4.5C10.2409 4.5 11.25 5.50912 11.25 6.75C11.25 7.99088 10.2409 9 9 9Z"
                    fill="#8C969F"
                  ></path>
                </svg>
                <span className="ltr:pl-1.5 lg:rtl:pr-1.5">Delivery:</span>
                <span className="font-semibold text-brand relative top-[1px] ltr:pl-1 rtl:pr-1">
                  Address
                </span>
                <span className="ltr:pl-1.5 lg:rtl:pr-1.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="text-xs text-brand-dark text-opacity-40"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex items-center w-0 py-4 overflow-hidden transition-all duration-200 ease-in-out opacity-1 navbar-right">
              <button
                type="button"
                aria-label="Search Toggle"
                title="Search toggle"
                className="flex items-center justify-center w-12 h-full transition duration-200 ease-in-out outline-none ltr:mr-6 rtl:ml-6 md:w-14 hover:text-heading focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-[22px] h-[22px] text-brand-dark text-opacity-40"
                >
                  <path
                    d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button
                className="flex items-center justify-center h-auto transform shrink-0 focus:outline-none"
                aria-label="cart-button"
              >
                <div className="relative flex items-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand-dark text-opacity-40"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.1"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="22" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="min-w-[20px] min-h-[20px] p-0.5 rounded-[20px] flex items-center justify-center bg-brand text-brand-light absolute -top-2.5 ltr:left-2.5 rtl:right-2.5 text-10px font-bold">
                    0
                  </span>
                </div>
                <span className="text-sm font-normal lg:text-15px text-brand-dark ltr:ml-2 rtl:mr-2">
                  Cart
                </span>
              </button>
              <div className="flex items-center shrink-0 ltr:ml-7 rtl:mr-7">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-brand-dark text-opacity-40"
                >
                  <path
                    d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.2"
                  ></path>
                </svg>
                <button
                  className="text-sm font-normal lg:text-15px text-brand-dark focus:outline-none ltr:ml-2 rtl:mr-2"
                  aria-label="Authentication"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
