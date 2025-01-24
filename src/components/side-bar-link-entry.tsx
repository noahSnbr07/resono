import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SideBarLinkEntryProps {
   id: number;
   href: string;
   title: string;
   icon: string;
}
export default function SideBarLinkEntry({ href, title, icon, id }: SideBarLinkEntryProps) {
   return (
      <Link
         key={id}
         href={href}
         className='flex gap-4'>
         <Image
            src={icon}
            draggable={false}
            height={24}
            width={24}
            alt='Icon'
            title='Icon'
         />
         <p className='opacity-50 font-bold'> {title} </p>
      </Link>
   );
}