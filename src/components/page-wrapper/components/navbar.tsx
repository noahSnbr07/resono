import navbarLinks from '@/constants/navbar-links';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Navbar() {
   return (
      <footer className='flex justify-evenly bg-stack p-2'>
         {navbarLinks.map((link) => (
            <Link
               key={link.id}
               className='flex flex-col items-center'
               href={link.href}>
               <Image
                  src={link.icon}
                  height={24}
                  width={24}
                  alt='Icon'
                  title='Icon' />
               <p> {link.title} </p>
            </Link>
         ))}
      </footer>
   );
}