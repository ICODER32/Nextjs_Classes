import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Charlie" },
];
export function GET() {
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const data = await request.json();
  users.push(data);
  //
  console.log(data);
  return NextResponse.json({ message: `Hello, ${data.name}` });
}
