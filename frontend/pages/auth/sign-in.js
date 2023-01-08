
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (result.ok) {
      router.replace("/");
      return;
    }
    alert("Credential is not valid");
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <h1>Sign In</h1>
        <form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value="test@gmail.com"
              placeholder="email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              value="test@7156"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
          </div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
