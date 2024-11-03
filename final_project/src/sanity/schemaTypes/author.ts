import { defineType } from "sanity";
export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "Enter your name",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: false, // <-- Defaults to false
      },
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      description: "Enter your Email",
    },
  ],
});
