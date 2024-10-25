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
  ],
});
