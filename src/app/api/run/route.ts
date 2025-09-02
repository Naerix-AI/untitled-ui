import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { q } = await req.json();
  return NextResponse.json({ result: `Echo: ${q ?? ""}` });
}
