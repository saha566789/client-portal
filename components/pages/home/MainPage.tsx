"use client"

import { createRequestEmail } from '@/app/actions/ClientEmail';
import { Input } from '@nextui-org/input';
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

import Footer from "@/components/pages/home/Footer";
import ClientSubsctibeModel from '@/components/models/ClientSubsctibeModel';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from '@/app/auth';


export type RequestDataType = {
  id?: number;
  email: string;

};
const MainPage = () => {
  const [open, setOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  console.log("Pending", pending);
  const { data: session } = useSession();
  return (

    <div
      className="relative flex flex-col  min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/background-image.png')", backgroundRepeat: "no-repeat" }}
    >
      <div className='py-6 px-8 flex justify-between'>
        <Image src='/TRA-Logo.png' alt='logo' width={150} height={100} />
        {session ? (
            <Dropdown>
              <DropdownTrigger>
              <Avatar showFallback src="https://images.unsplash.com/broken" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new"> {session.user?.name}</DropdownItem>
          
                <DropdownItem key="delete" className="text-danger" color="danger">
                <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Logout
            </button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            

           
      
        ) :
          (<Link href="/login"><Button radius="md" className='bg-white  font-medium'>Login</Button></Link>)
        }

      </div>
      <div className=" bg-opacity-80 p-8 rounded-lg">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">
          Get ready for <br />
          the next stage
        </h1>
        <p className="text-base font-medium text-gray-700 mb-8 max-w-lg mt-6">
          Get ready to elevate your HR experience with cutting-edge technology designed for the modern workforce. Sign up to stay ahead.
        </p>
        <h2 className="text-2xl font-semibold text-blue-950 mb-4 mt-20">
          Apply for closed beta
        </h2>
        <form
          className="w-full"
          ref={formRef}
          action={async (formData) => {
            const data = await createRequestEmail(null, formData);
            if ("error" in data) {
              toast.error(data.error);
            } else {
              setOpen(true)
              if (formRef.current) {
                formRef.current.reset();
              }
            }
          }}
        >

          <div className='flex gap-4'>
            <Input
              radius='full'
              type="email"

              placeholder='Enter your email'
              className="w-72 border-blue-950 text-black border-2 h-12 rounded-full"
              name="email"
            />
            <Button
              type="submit"
              isLoading={pending}
              aria-disabled={pending}
              radius="full"
              className='h-12 font-medium bg-orange-600 text-white text-base'>
              subscribe <FaLocationArrow />
            </Button>

          </div>
        </form>
        <ClientSubsctibeModel open={open} setOpen={setOpen} />

        <p className="mt-6 text-blue-950">
          <a href="mailto:antarranisahapriya@gmail.com" className="underline flex gap-2">
            <MdOutlineEmail className='mt-1 text-xl text-orange-600' /> info@therecruitmentalternative.com.au
          </a>
          <a href="mailto:someone@example.com">Send email</a>
        </p>
        <div>
          <Footer />
        </div>
      </div>
    </div>

  );
};

export default MainPage;