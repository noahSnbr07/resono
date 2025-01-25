import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SideBarLinkEntryProps {
   id: number;
   href: string;
   title: string;
   icon: string;
   active: boolean;
}
export default function SideBarLinkEntry({ href, title, icon, id, active }: SideBarLinkEntryProps) {
   return (
      <Link
         style={{ background: active ? 'rgba(255, 255, 255, 0.1)' : "" }}
         key={id}
         href={href}
         className='flex p-4 rounded-lg gap-4'>
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