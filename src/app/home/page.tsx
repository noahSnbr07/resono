import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Link from 'next/link';
import React from 'react'
import TagLine from '../home/components/tag-line';
import stylesheet from './stylesheet';

export default function page() {
   return (
      <PageWrapper
         title='Home'
         stylesheet={stylesheet}>
         <TagLine />
         <Link href={"/search"}>search</Link>
      </PageWrapper>
   );
}