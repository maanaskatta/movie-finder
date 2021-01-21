import Head from "next/head";
import Link from "next/link";

import { RiMovie2Line } from "react-icons/ri";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Movie Finder</title>
      </Head>
      <div className=" flex justify-between items-center p-10 bg-gray-100 border-b-4 border-red-600">
        <Link href="/">
          <div className="flex justify-center gap-2 items-center cursor-pointer">
            <RiMovie2Line className="text-5xl text-purple-900" />
            <p className="text-6xl text-purple-400 font-extrabold">
              Movie Finder
            </p>
          </div>
        </Link>
      </div>
      <div className="bg-gray-700 py-10">{children}</div>
    </div>
  );
};

export default Layout;
