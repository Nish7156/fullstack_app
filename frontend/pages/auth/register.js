import React from "react";
import Link from "next/link";

function register() {
  return (
    <div>
      <div
        className="flex items-center justify-center h-screen bg-white sm:bg-gray-100"
        dir="ltr"
      >
        <div className="m-auto bg-white max-w-[420px] w-full bg-light sm:shadow p-5 sm:p-8 rounded">
          <h3 className="mt-4 mb-6 text-base italic text-center text-gray-500">
            Register new account
          </h3>
          <form novalidate="">
            <div className="mb-4">
              <label
                for="name"
                className="block mb-3 text-sm font-semibold leading-none text-body-dark"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="flex items-center w-full h-12 px-4 text-sm transition duration-300 ease-in-out border rounded appearance-none text-heading focus:outline-none focus:ring-0 border-border-base focus:border-accent "
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                aria-invalid="false"
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block mb-3 text-sm font-semibold leading-none text-body-dark"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="flex items-center w-full h-12 px-4 text-sm transition duration-300 ease-in-out border rounded appearance-none text-heading focus:outline-none focus:ring-0 border-border-base focus:border-accent "
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                aria-invalid="false"
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <label
                  for="password"
                  className="text-sm font-semibold leading-none text-body-dark"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="flex items-center w-full h-12 px-4 text-sm transition duration-300 ease-in-out border rounded appearance-none text-heading focus:outline-none focus:ring-0 border-border-base focus:border-accent"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                />
                <label
                  for="password"
                  className="absolute -mt-2 ltr:right-4 rtl:left-4 rtl:right-auto top-5 text-body"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            <button
              data-variant="normal"
              className="inline-flex items-center justify-center flex-shrink-0 w-full h-12 px-5 py-0 font-semibold leading-none text-white transition duration-300 ease-in-out bg-green-500 border border-transparent rounded outline-none focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light hover:bg-accent-hover"
            >
              Register
            </button>
          </form>
          <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
            <hr className="w-full" />
            <span className="absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light">
              Or
            </span>
          </div>
          <div className="text-sm text-center sm:text-base text-body">
            Already have an account?
            <Link href={"sign-in"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
