import React from 'react';
import stylesheet from '../home/stylesheet';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Header from './components/header';
import ReportList from './components/report-list';

export default function page() {
   return (
      <PageWrapper
         header={<Header />}
         stylesheet={stylesheet}>
         <ReportList />
      </PageWrapper>
   );
}