import PageWrapper from '@/components/page-wrapper/page-wrapper';
import React from 'react'
import stylesheet from './stylesheet';
import Artists from './components/artists';

export default function page() {
   return (
      <PageWrapper
         title='Home'
         stylesheet={stylesheet}>
         <Artists />
      </PageWrapper>
   );
}