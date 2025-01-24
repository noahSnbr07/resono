import PageWrapper from '@/components/page-wrapper/page-wrapper'
import React from 'react'
import ArticleList from './components/article-list';
import stylesheet from './stylesheet';

export default function page() {
   return (
      <PageWrapper
         title='Articles'
         stylesheet={stylesheet}>
         <ArticleList />
      </PageWrapper>
   );
}