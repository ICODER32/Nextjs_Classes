"use client";
import { client } from "@/sanity/lib/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type News = {
  _id: string;
  title: string;
  content: any;
  publishtime: string;
  authorname: { name: string; email: string };
  poster: any;
  category: string;
};
export default function Home() {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const news = await client.fetch(
      `*[_type == "news" && category[0]=='headline' ] {
  title,
    content,
    publishtime,
    authorname->{name,email},
    poster,
    category,
    _id
    
}`,
      {
        cache: "no-cache",
      }
    );
    setNews(news);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="flex gap-2 m-8 flex-wrap">
      {news.map((news: News) => (
        <Link key={news._id} href={`/news/${news._id}`}>
          <Card className=" max-w-[400px]">
            <CardHeader>
              <CardTitle>{news.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={urlFor(news.poster)} alt="" />
              <CardDescription>
                {news.content[0].children[0].text}
              </CardDescription>
            </CardContent>
            <CardFooter className=" flex justify-between">
              <p>{new Date(news.publishtime).toDateString()}</p>
              <p>{news.authorname.name}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
