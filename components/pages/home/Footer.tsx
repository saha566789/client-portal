'use client'

import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';


const Footer = () => {
  
    return (
      <div className="mt-24">
      <div className=" ">
        <div className="max-w-7xl mx-auto  lg:flex lg:justify-between items-center">
          
          {/* Left side */}
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <FaRegCopyright className="text-blue-950" />
            <h1 className="text-blue-950 text-sm font-medium md:text-base">2024 therecruitmentalternative</h1>
          </div>
          
          {/* Right side */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-4">
            <Link href={'/terms-and-conditions'}>
              <p className="text-blue-950 underline font-medium hover:text-blue-950 hover:underline text-sm md:text-base">
                Terms & Conditions
              </p>
            </Link>
            <Link href={'#'}>
              <p className="text-blue-950 underline font-medium hover:text-blue-950 hover:underline text-sm md:text-base">
                Privacy Policy
              </p>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
    
      
    );
};

export default Footer;