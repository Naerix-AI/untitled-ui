import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { setShare } from "@/lib/share-store";

export async function POST(req: NextRequest) {
  const { out } = await req.json();
  const id = crypto.randomBytes(5).toString("hex");
  await setShare(id, out);

  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return NextResponse.json({ url: `${base}/s/${id}` });
}
