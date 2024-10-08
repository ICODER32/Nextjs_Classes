## Table of Contents

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [Introduction to TypeScript](#introduction-to-typescript)
3. [Introduction to Node.js](#introduction-to-nodejs)
4. [Introduction to React](#introduction-to-react)
5. [Introduction to Next.js](#introduction-to-nextjs)
6. [Setting Up a Next.js Project](#setting-up-a-nextjs-project)
7. [Basic Features of Next.js](#basic-features-of-nextjs)
8. [Advanced Features of Next.js](#advanced-features-of-nextjs)
9. [Conclusion](#conclusion)

## Introduction to JavaScript

JavaScript (JS) is a versatile, high-level, interpreted programming language that is a core technology of the World Wide Web. It was created by Brendan Eich in 1995 during his time at Netscape Communications. Originally, JavaScript was developed under the name Mocha, but it was later renamed to LiveScript and, finally, to JavaScript.

### Key Points

- **Release Year:** 1995
- **Created by:** Brendan Eich
- **Standardization:** ECMAScript (First Edition in 1997)
- **Usage:** Client-side scripting, server-side development (Node.js), and much more.

## Introduction to TypeScript

TypeScript is a strongly typed, object-oriented, compiled language. It was developed and maintained by Microsoft, with its first version released in 2012. TypeScript is a superset of JavaScript, which means any valid JavaScript code is also valid TypeScript code. It introduces static types to JavaScript, making it easier to catch errors early during development.

### Key Points

- **Release Year:** 2012
- **Developed by:** Microsoft
- **Main Features:** Static typing, object-oriented programming, transpiles to JavaScript.
- **Usage:** Large-scale JavaScript applications, improved tooling and developer experience.

## Introduction to Node.js

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It was created by Ryan Dahl and first released in 2009. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for server-side applications.

### Key Points

- **Release Year:** 2009
- **Created by:** Ryan Dahl
- **Main Features:** Event-driven, non-blocking I/O, single-threaded but highly scalable.
- **Usage:** Server-side scripting, building scalable network applications, RESTful APIs.

### Role in React and Next.js

- **React Development:** Node.js provides the environment to run tools like `npm` (Node Package Manager) and `npx` (Node Package Execute), which are essential for managing dependencies and running build tools for React projects.
- **Next.js Development:** Next.js is built on top of Node.js. It uses Node.js for server-side rendering (SSR), API routes, and other server-side functionalities.

## Introduction to React

React is a JavaScript library for building user interfaces, particularly single-page applications where a fluid and responsive user experience is needed. It was developed by Facebook and released in 2013. React allows developers to create large web applications that can change data, without reloading the page.

### Key Points

- **Release Year:** 2013
- **Developed by:** Facebook
- **Main Features:** Component-based architecture, virtual DOM, unidirectional data flow.
- **Usage:** Building user interfaces, single-page applications.

## Introduction to Next.js

Next.js is a React framework that provides a powerful solution for server-side rendering and static site generation. It was created by Vercel (formerly ZEIT) and first released in 2016. Next.js offers an out-of-the-box setup with a rich ecosystem and developer experience enhancements, making it easier to build performant web applications.

### Key Points

- **Release Year:** 2016
- **Developed by:** Vercel (formerly ZEIT)
- **Main Features:** Server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, and more.
- **Usage:** Building SEO-friendly, fast, and scalable web applications.

## Setting Up a Next.js Project

1. **Prerequisites:**
   - Node.js installed on your machine.
   - Basic knowledge of React.
2. **Documentation:**

   [https://nextjs.org/docs](https://nextjs.org/docs)

3. **Installation:**

   ```bash
   npx create-next-app@latest
   ```

4. **Project Structure:**
   - `app/`: Contains all the route components.
   - `public/`: Contains static files such as images.
   - `styles/`: Contains global and modular styles.

## Basic Features of Next.js

- **File-based Routing:**

  - Create routes by adding files to the `app/` directory.
  - Dynamic routing using brackets (e.g., `[id].js` for dynamic routes).

- **Server-side Rendering (SSR):**

  - Fetch data and render on the server for improved SEO and performance.
  - Use `getServerSideProps` in your pages.

- **Static Site Generation (SSG):**
  - Pre-render pages at build time for better performance.
  - Use `getStaticProps` and `getStaticPaths`.

## Advanced Features of Next.js

- **API Routes:**

  - Create API endpoints in the `app/api/` directory.
  - Handle server-side logic and database interactions.

- **Image Optimization:**

  - Built-in image component for automatic image optimization.
  - Supports resizing, lazy loading, and more.

- **Internationalization (i18n):**

  - Support for multiple languages and locales.
  - Easy setup and configuration.

- **Incremental Static Regeneration (ISR):**
  - Update static content after the site is built.
  - Allows you to update pages without rebuilding the entire site.

## Conclusion

Next.js is a powerful framework that extends React's capabilities with additional features like SSR, SSG, and API routes. It provides a comprehensive solution for building modern, performant web applications with ease. By understanding the history and evolution of JavaScript, TypeScript, Node.js, and React, you can better appreciate the strengths of Next.js and leverage its features to create outstanding web experiences.

Here are the steps in a README format to guide your students on starting a Next.js app, explaining the files, and displaying "Hello, World!" directly from `layout.tsx`:

---

# Content Covered in Class 01

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Creating a Next.js App](#creating-a-nextjs-app)
3. [Navigating the Project Structure](#navigating-the-project-structure)
4. [Understanding Key Files](#understanding-key-files)
5. [Displaying "Hello, World!" from `layout.tsx`](#displaying-hello-world-from-layouttsx)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (includes npm)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Creating a Next.js App

1. **Open your terminal**.
2. **Run the following command** to create a new Next.js app:
   ```bash
   npx create-next-app@latest
   ```
3. **Navigate to your project directory**:
   ```bash
   cd <project-name> or type ls to see the project name
   ```

## Navigating the Project Structure

1. **List the files and directories** in your project to check for `package.json`:

   - On macOS/Linux:
     ```bash
     ls
     ```
   - On Windows:
     ```bash
     dir
     ```

   You should see a list of files and directories including `package.json`.

## Understanding Key Files

- **`package.json`**: Lists the project's dependencies and scripts.
- **`next.config.js`**: Configuration file for Next.js.
- **`app/`**: Contains route components.
  - **`layout.tsx`**: The layout component that wraps around page content.
  - **`page.tsx`**: The default page component.
- **`public/`**: Static files like images.
- **`styles/`**: CSS files for styling.

## Displaying "Hello, World!" from `layout.tsx`

1. **Open `layout.tsx`** in your code editor. This file is typically located at `app/layout.tsx`.
2. **Modify `layout.tsx`** to display "Hello, World!":

   ```typescript
   // app/layout.tsx

   const Layout = ({ children }) => {
     return (
       <html lang="en">
         <body>
           <h1>Hello, World!</h1>
           {children}
         </body>
       </html>
     );
   };

   export default Layout;
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your web browser** and navigate to `http://localhost:3000`. You should see "Hello, World!" displayed on the page.

## Conclusion

You've now successfully created a Next.js app, navigated its structure, understood key files, and displayed "Hello, World!" from `layout.tsx`. This foundational knowledge will help you build more complex applications using Next.js.
