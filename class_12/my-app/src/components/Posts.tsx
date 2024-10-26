"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const posts = await client.fetch(`
    *[_type=='posts']{
  title,body,mainImage
}
    `);
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
      <div className="space-y-8">
        {posts.map((post: any) => (
          <div
            key={post.title}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold p-4 text-gray-800">
              {post.title}
            </h2>
            <img
              src={urlFor(post.mainImage)}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <PortableText
                value={post.body}
                className="text-gray-600 text-sm leading-relaxed"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
