import PageWrapper from '@/components/page-wrapper';
import Link from 'next/link';
import React from 'react'

export default function page() {
   return (
      <PageWrapper header={<>hi</>}>
         <Link href={"/home"}>home</Link>
      </PageWrapper>
   );
}