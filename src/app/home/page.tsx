import PageWrapper from '@/components/page-wrapper';
import Link from 'next/link';
import React from 'react'
import TagLine from './components/tag-line';
import stylesheet from './stylesheet';

export default function page() {
   return (
      <PageWrapper stylesheet={stylesheet} header={<>hi</>}>
         <TagLine />
         <Link href={"/search"}>search</Link>
      </PageWrapper>
   );
}