import { Article } from "@prisma/client";

export default function ArticleEntry({ article }: { article: Article }) {

   //destructure artist
   const { title, body, tags } = article;

   const TagList = () => (
      <div className="flex gap-2 flex-wrap">
         {tags.map((tag, i) => <p key={i} className="px-2 py-1 bg-stack rounded-full text-sm">
            {tag}
         </p>)}
      </div>)

   return (
      <div
         key={article.id}
         className="flex flex-col gap-2 p-4 bg-stack rounded-lg">
         <p className="text-brighten text-lg font-bold"> {title} </p>
         <p> {body} </p>
         <TagList />
      </div>
   );
}