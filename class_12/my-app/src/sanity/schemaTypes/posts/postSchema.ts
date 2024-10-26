import { defineType } from "sanity";
export const postSchema = defineType({
  name: "posts",
  title: "Posts",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Make it catchy",
    },
    {
      title: "Published at",
      name: "publishedAt",
      type: "datetime",
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
