import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Home Abc</h1>
      <Link href={"/mainroute/nested"}>Nested</Link>
    </div>
  );
}

export default Home;
