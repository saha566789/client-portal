import Image from "next/image";
import LoginTab from "@/components/pages/home/LoginTab";
import SignIn from "./SocialLogin";


export default function Login() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300 ">
      {/* Container */}
      <div className="bg-white flex h-[800px] my-8 shadow-lg max-w-7xl w-full overflow-hidden">
        {/* Left Section (Form) */}
        <div className="w-full md:w-1/2 p-10">
          {/* Logo */}
          <div className="my-8 flex justify-center">
            <Image
              src="/TRA-Logo.png"
              alt="Safe Box"
              width={150}
              height={100}
            />
          </div>

          <div className="mt-28">
            {/* Welcome Text */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-center">
              Please enter your details to continue.
            </p>

            {/* Sign In / Sign Up Toggle */}
            <LoginTab />
            {/* Form */}

            {/* Social Login */}
            <p className="text-center text-gray-500 my-4 flex items-center">
              <span className="flex-grow border-t border-gray-300"></span>
              <span className="mx-2">Or Continue With</span>
              <span className="flex-grow border-t border-gray-300"></span>
            </p>
            <div className="flex justify-center space-x-4">
             <SignIn  />
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-gray-400 text-sm mt-20 text-center">
            Join millions of smart investors to manage your finances.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="hidden md:flex w-1/2 relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/pexels-photo-7415124.jpeg"
              alt="Safe Box"
              layout="fill"
              objectFit="cover"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
