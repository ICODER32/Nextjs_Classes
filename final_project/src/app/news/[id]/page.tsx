"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const news = await client.fetch(
      `*[_type == "news" && _id==$id] {
  title,
    content,
    publishtime,
    authorname->{name,email},
    poster,
    category,
    _id
    
}`,
      { id: params.id }
    );
    console.log(news);
    setNews(news);
  };
  useEffect(() => {
    getNews();
  }, []);

  if (news.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>{news[0].title}</h1>
      <img src={urlFor(news[0].poster)} alt="" />
      <p>{news[0].content[0].children[0].text}</p>
    </div>
  );
}
