import { icon } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function page() {


  return (
    <div className='size-full flex flex-col items-center justify-center gap-4'>
      <Image
        src={icon}
        height={128}
        width={128}
        title='Resono Logo'
        alt='Resono Logo'
        priority />
      <h1 className='font-bold text-xl'> Resono </h1>
      <Link
        href={"/home"}
        className='bg-accent px-8 rounded-lg py-2 text-xl font-bold'> Start </Link>
    </div>
  );
}