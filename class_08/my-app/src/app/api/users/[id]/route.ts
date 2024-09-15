import { NextResponse } from "next/server";

export function GET(request: Request, { params }: any) {
  console.log(params);
  return NextResponse.json({ message: `id povided: ${params.id}` });
}
