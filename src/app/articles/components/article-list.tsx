import database from '@/database/database';
import { article } from '@prisma/client';
import React from 'react'
import Article from './article';

export default async function ArticleList() {

   const articles = await database.article.findMany();

   return (
      <div>
         {articles.map((article: article) => <Article key={article.id} article={article} />)}
      </div>
   );
}