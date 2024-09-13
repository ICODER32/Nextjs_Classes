# Guide to the Fetch Method in Next.js

## 1. Introduction to `fetch()`

The `fetch()` method is a built-in JavaScript function used for making HTTP requests to retrieve data from servers. It's commonly used to get data from REST APIs and can be used in both client-side and server-side code.

In Next.js, the `fetch()` method can be used to fetch data and render it on your pages.

## 2. Basic Syntax of `fetch()`

The basic syntax of `fetch()` is:

```javascript
const response = await fetch(url);
const data = await response.json();
```

- **`url`**: The endpoint or resource from which you want to fetch data.
- **`response.json()`**: Converts the fetched response into JSON format.

## 3. Fetching Data in Next.js

In Next.js, you can use `fetch()` in different places to retrieve data:

- **Client-Side Fetching**: Inside React components.
- **Server-Side Fetching**: In Server components

### 3.1 Client-Side Fetching

#### Steps:

1. Create a new file in the `page.tsx` directory, e.g., `app/fetch/page.tsx`.
2. Use `useState` and `useEffect` hooks to fetch data on the client side.

Here’s a full example of client-side data fetching using the `fetch()` method:

```jsx
import { useEffect, useState } from "react";

export default function FetchExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty array means this useEffect runs once on component mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Explanation:

- `useEffect` is used to fetch data when the component is mounted.
- The response is converted to JSON using `response.json()`.
- Data is stored in the `data` state variable using `setData`.
- The component will render a list of posts once the data is successfully fetched.

### 3.2 Server-Side Fetching with `getServerSideProps`

For **server-side rendering**, you can fetch data using the `getServerSideProps` function. This will ensure data is fetched on every request and passed to your page.

#### Steps:

1. Create a new file in the `pages` directory, e.g., `pages/server-side-fetch.js`.
2. Use `getServerSideProps` to fetch data from an API and pass it as props to your component.

```jsx
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // Send only the first 10 posts
    },
  };
}

export default function ServerSideFetch({ posts }) {
  return (
    <div>
      <h1>Server-Side Fetched Data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Explanation:

- `getServerSideProps` fetches data from an external API and passes it as `props` to the page component.
- Data is rendered on the server and displayed when the page loads, which is ideal for SEO.

### 3.3 Fetching Data with `getStaticProps`

For **static site generation (SSG)**, you can use `getStaticProps`. This function fetches data at build time, and the data is included in the static HTML that is generated.

#### Steps:

1. Create a new file in the `pages` directory, e.g., `pages/static-fetch.js`.
2. Use `getStaticProps` to fetch data at build time.

```jsx
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // Send only the first 10 posts
    },
  };
}

export default function StaticFetch({ posts }) {
  return (
    <div>
      <h1>Static Fetched Data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Explanation:

- `getStaticProps` fetches the data at build time. Once the site is built, the HTML pages are statically served without hitting the API on every request.
- This method is best for data that doesn’t change often.

## 4. Error Handling in Fetch

When using `fetch()`, it's important to handle possible errors, such as network issues or server errors.

### Example with Error Handling:

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.error("Fetch error:", error));
}, []);
```

### Explanation:

- Check if the response is not OK (`!response.ok`), and if so, throw an error.
- Use `catch()` to log the error or handle it gracefully in the UI.

## 5. Combining Fetch with `useState`

It’s common to combine the `useState` and `fetch()` together to dynamically fetch and display data.

### Example:

```jsx
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.slice(0, 10).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
```

### Explanation:

- **`useState` for managing data**: `data`, `loading`, and `error` states are managed to handle the fetch process.
- **Error handling**: Displays error messages if something goes wrong.
- **Loading state**: A loading message is shown while data is being fetched.

---

## Conclusion

- **Client-side fetching** is useful when data is needed after the page is loaded.
- **Server-side fetching** with `getServerSideProps` is great for SEO and dynamic data.
- **Static site generation** with `getStaticProps` is efficient for static websites with data that doesn’t change frequently.
- Always handle **loading** and **error states** for a smooth user experience.

By understanding and implementing `fetch()`, your students will be able to interact with external APIs and integrate dynamic data into their Next.js applications.
