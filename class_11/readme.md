### Guide: Introduction to Sanity CMS and Schema Creation

---

#### **1. Introduction to Sanity CMS**

Sanity CMS is a modern, headless content management system that focuses on providing developers with flexibility and full control over content management and delivery. It allows you to structure content as data, which can then be consumed by any frontend (website, mobile app, etc.) via APIs.

**Key Features of Sanity CMS**:

- **Headless CMS**: Unlike traditional CMS platforms that manage both content and presentation, Sanity is headless. This means it handles only content, leaving the presentation layer (front-end) up to you.
- **Customizable**: You can define custom content structures using schemas that are flexible and suited to your specific needs.
- **Real-time Collaboration**: Multiple users can work together in real-time, making it ideal for content-heavy projects involving large teams.
- **API-Driven**: Content is delivered through powerful REST and GraphQL APIs.
- **Studio Customization**: Sanity Studio is fully customizable and can be tailored to your specific content workflows.

**Why Use Sanity CMS?**

- **Structured Content**: Content is stored in a structured, reusable format (JSON), making it highly versatile and portable.
- **Flexibility for Developers**: As a developer, you get complete control over how content is structured, managed, and delivered.
- **Scalability**: Sanity can scale from small projects to large enterprise-level applications, thanks to its efficient content structure and API-first design.

---

#### **2. What is a Schema in Sanity?**

A schema in Sanity defines the structure of the content you'll be managing. It allows you to specify the fields, data types, and relationships between different types of content. By creating a schema, you are essentially building a blueprint that tells Sanity how to store and manage your data.

**Key Concepts**:

- **Document**: A top-level entity representing content types like blog posts, authors, or products.
- **Field**: A specific data type within a document, such as a title, image, or date.
- **Reference**: A field that creates a link between two different document types. For example, a blog post can reference an author document.
- **Array**: A collection of multiple fields, such as an array of tags or images.
- **Block Content**: A rich text editor that allows for complex content structures like text, images, and lists.

---

#### **3. Creating a Simple Schema for Blogs and Authors**

Now that we understand what schemas are, let’s create two simple schemas: one for **Blog Posts** and one for **Authors**.

### Step-by-Step Process:

**Step 1: Create a Next.js Project and Initialize Sanity**

1. First, set up a Next.js project with Sanity:

   ```bash
   npx create-next-app@latest my-nextjs-project
   cd my-nextjs-project
   ```

2. Initialize Sanity inside your Next.js project:

   ```bash
   npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production
   ```

   - This command will create a new Sanity project with the "clean" template, a new dataset called `production`, and will set up Sanity Studio.

**Step 2: Define the Author Schema**

In Sanity, we define schemas inside the `/sanity/schemas` folder. Here’s how you define an author schema.

Create a new file `author.ts` in the `schemas` folder:

```ts
// /sanity/schemas/author.ts
import { defineType } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
```

- **name**: This field stores the author's name.
- **bio**: A text field for the author's biography.
- **avatar**: An image field for the author's picture, with `hotspot` enabled to allow focal point selection.

**Step 3: Define the Blog Post Schema**

Next, create a schema for blog posts that can reference the author schema.

Create a new file `blog.ts` in the `schemas` folder:

```ts
// /sanity/schemas/blog.ts
import { defineType } from "sanity";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
});
```

- **title**: A string field for the blog post's title.
- **slug**: A unique identifier for the blog post, automatically generated from the title.
- **author**: A reference to the `author` document, linking the blog post to its author.
- **publishedAt**: A datetime field for when the blog post was published.
- **body**: A rich text editor using `blockContent` for the main content of the blog post.

**Step 4: Define Block Content**

To handle rich text for blog post content, we need to define `blockContent`. Add a new file `blockContent.ts`:

```ts
// /sanity/schemas/blockContent.ts
import { defineType } from "sanity";

export const blockContentSchema = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [{ title: "Bullet", value: "bullet" }],
    },
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
});
```

**Step 5: Register the Schemas**

Once the schemas are defined, import them into your main schema file. Open `index.ts` in the `schemas` folder and register them:

```ts
// /sanity/schemas/index.ts
import { authorSchema } from "./author";
import { blogSchema } from "./blog";
import { blockContentSchema } from "./blockContent";

export const schemaTypes = [authorSchema, blogSchema, blockContentSchema];
```

**Step 6: Run the Sanity Studio**

After setting up your schemas, you can run the Sanity Studio to manage content.

```bash
npm run dev
```

Visit the Sanity Studio at `http://localhost:3000/studio` to start managing blog posts and authors.

---

#### **4. Summary**

In this guide, we introduced Sanity CMS and explained what schemas are. We then created two custom schemas for **Authors** and **Blog Posts** in a Next.js project, which allow you to manage blogs and associate them with authors using Sanity Studio. You can now create and manage structured content efficiently, all powered by Sanity’s flexible schema system.
