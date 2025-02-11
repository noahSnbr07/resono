import database from '@/database/database';
import React from 'react'
import ArticleEntry from './article';
import { Article } from '@prisma/client';

export default async function ArticleList() {

   const articles = await database.article.findMany();

   return (
      <div>
         {articles.map((article: Article) => <ArticleEntry key={article.id} article={article} />)}
      </div>
   );
}