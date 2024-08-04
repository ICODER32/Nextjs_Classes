# File-Based Routing in Next.js 13 (App Directory)

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setting Up the Project](#setting-up-the-project)
4. [Understanding File-Based Routing](#understanding-file-based-routing)
5. [Creating Routes](#creating-routes)
6. [Dynamic Routing](#dynamic-routing)
7. [Nested Routes](#nested-routes)
8. [Navigating Routes](#navigating-routes)
   - [Using the `Link` Tag](#using-the-link-tag)
   - [Using the `useRouter` Hook](#using-the-userouter-hook)
9. [Conclusion](#conclusion)

## Introduction

Next.js 13 introduces the `app` directory, which allows for a new approach to file-based routing. This guide will walk you through the basics of setting up and using file-based routing in the `app` directory.

## Prerequisites

- Basic understanding of Next.js
- Node.js and npm installed
- A code editor like VS Code

## Setting Up the Project

1. **Create a new Next.js 13 app** (if you don't have one already):

   ```bash
   npx create-next-app@latest my-next13-app --experimental-app
   ```

2. **Navigate to your project directory**:

   ```bash
   cd my-next13-app
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Understanding File-Based Routing

In Next.js 13, the `app` directory is used to define your application's routes. Each file or folder inside the `app` directory represents a route in your application.

## Creating Routes

### Basic Route

1. **Create a new file** named `page.tsx` inside the `app` directory:

   ```bash
   touch app/page.tsx
   ```

2. **Add the following content** to `page.tsx`:

   ```tsx
   // app/page.tsx
   export default function Home() {
     return <h1>Hello, World!</h1>;
   }
   ```

   This will create the root route (`/`) and display "Hello, World!" when you navigate to `http://localhost:3000`.

### Additional Routes

1. **Create a new folder** named `about` inside the `app` directory:

   ```bash
   mkdir app/about
   ```

2. **Create a new file** named `page.tsx` inside the `about` folder:

   ```bash
   touch app/about/page.tsx
   ```

3. **Add the following content** to `page.tsx`:

   ```tsx
   // app/about/page.tsx
   export default function About() {
     return <h1>About Page</h1>;
   }
   ```

   This will create the `/about` route and display "About Page" when you navigate to `http://localhost:3000/about`.

## Dynamic Routing

Dynamic routes can be created by using square brackets in the file or folder name.

1. **Create a new folder** named `[id]` inside the `app` directory:

   ```bash
   mkdir app/[id]
   ```

2. **Create a new file** named `page.tsx` inside the `[id]` folder:

   ```bash
   touch app/[id]/page.tsx
   ```

3. **Add the following content** to `page.tsx`:

   ```tsx
   // app/[id]/page.tsx
   import { useRouter } from "next/router";

   export default function DynamicPage() {
     const router = useRouter();
     const { id } = router.query;

     return <h1>Dynamic Page: {id}</h1>;
   }
   ```

   This will create a dynamic route. For example, navigating to `http://localhost:3000/123` will display "Dynamic Page: 123".

## Nested Routes

1. **Create a new folder structure** inside the `app` directory:

   ```bash
   mkdir -p app/dashboard/settings
   ```

2. **Create a new file** named `page.tsx` inside the `settings` folder:

   ```bash
   touch app/dashboard/settings/page.tsx
   ```

3. **Add the following content** to `page.tsx`:

   ```tsx
   // app/dashboard/settings/page.tsx
   export default function Settings() {
     return <h1>Dashboard Settings</h1>;
   }
   ```

   This will create the nested route `/dashboard/settings` and display "Dashboard Settings" when you navigate to `http://localhost:3000/dashboard/settings`.

## Navigating Routes

### Using the `Link` Tag

The `Link` tag from Next.js helps you navigate between pages without reloading the entire page.

1. **Import the `Link` component** in your `page.tsx`:

   ```tsx
   // app/page.tsx
   import Link from "next/link";

   export default function Home() {
     return (
       <div>
         <h1>Hello, World!</h1>
         <Link href="/about">Go to About Page</Link>
       </div>
     );
   }
   ```

   This will create a link to the `/about` page. When clicked, it navigates to the About Page without a full page reload.

### Using the `useRouter` Hook

The `useRouter` hook allows you to programmatically navigate between pages.

1. **Import the `useRouter` hook** in your `page.tsx`:

   ```tsx
   // app/page.tsx
   import { useRouter } from "next/router";

   export default function Home() {
     const router = useRouter();

     const handleClick = () => {
       router.push("/about");
     };

     return (
       <div>
         <h1>Hello, World!</h1>
         <button onClick={handleClick}>Go to About Page</button>
       </div>
     );
   }
   ```

   This will create a button that navigates to the `/about` page when clicked.

## Conclusion

You've now learned how to set up and use file-based routing in the `app` directory of a Next.js 13 project, including creating basic, dynamic, and nested routes, and navigating between them using the `Link` tag and `useRouter` hook.
