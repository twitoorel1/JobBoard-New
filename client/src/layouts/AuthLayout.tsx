import React, { useEffect } from "react";
import { LayoutProps } from "@/types/global";
import { useRouter } from "next/router";
import store from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import useLoader from "@/hooks/useLoader";
import SkeletonLoader from "@/components/common/SkeletonLoader";

const AuthLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isLoading = useLoader(800);

  const { isAuthenticated } = store.getState().auth;
  useEffect(() => {
    if (isAuthenticated === true) {
      // Redirect the user to the login page if they are not authenticated
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <section>
      {/* Navbar Here */}
      <main className="flex flex-col justify-center min-h-full mx-auto px-5 lg:w-1/4 lg:p-8">
        {isLoading ? <SkeletonLoader isLoading={isLoading} /> : children}
      </main>

      <div className="hidden md:flex justify-between items-end mt-10 h-0 absolute w-full bottom-0">
        <Image className="" width={360} height={360} src="/left.svg" alt="" />
        <div className="text-sm my-5 flex gap-4 text-gray-300">
          <Link className="text-gray-500" href={"/"}>
            <span className="text-gray-500">Privacy Policy</span>
          </Link>
          |
          <Link className="text-gray-500" href={"/"}>
            <span className="text-gray-500">Terms Of Use</span>
          </Link>
          |
          <Link className="text-gray-500" href={"/"}>
            <span className="text-gray-500">User Manual</span>
          </Link>
          |
        </div>
        <Image
          className="hidden md:block"
          width={360}
          height={360}
          src="/right.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default AuthLayout;
