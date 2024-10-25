import { type SchemaTypeDefinition } from "sanity";
import { postSchema } from "@/sanity/schemaTypes/posts/postSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postSchema],
};
