import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Link from 'next/link';
import React from 'react'

export default function page() {
   return (
      <PageWrapper
         title='Search'
         header={<>hi</>}>
         <Link href={"/home"}>home</Link>
      </PageWrapper>
   );
}