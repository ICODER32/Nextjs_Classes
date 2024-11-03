import { defineType } from "sanity";
export const newsSchema = defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Enter your news title",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },
    {
      title: "Publish time",
      name: "publishtime",
      type: "datetime",
    },
    {
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
