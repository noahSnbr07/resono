"use client";

import { menu } from '@/assets/assets';
import Image from 'next/image'
import React from 'react'
import useSideBar from '@/hooks/use-side-bar';
export default function TagLine() {

   const { open } = useSideBar();

   return (
      <button
         onClick={open}
         className='flex gap-4 w-full'>
         <Image
            src={menu}
            height={24}
            width={24}
            alt='Menu Icon'
         />
         <p className='text-brighten'> Welcome back! </p>
      </button>
   );
}