import Button from "@/components/Button";
import Link from "next/link";
export default function page() {
  const a = "abc";
  console.log(a);
  return (
    <>
      <h1>Hello World</h1>
      <h2>Abc</h2>
      <Link href="/errorhandle">loading page</Link>
      <Button />
    </>
  );
}
