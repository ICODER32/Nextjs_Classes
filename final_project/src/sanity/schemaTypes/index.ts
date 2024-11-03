import { type SchemaTypeDefinition } from "sanity";
import { authorSchema } from "@/sanity/schemaTypes/author";
import { newsSchema } from "@/sanity/schemaTypes/news";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorSchema, newsSchema],
};
