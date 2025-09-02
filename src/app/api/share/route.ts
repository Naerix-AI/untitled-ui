import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
// ⬇️ 공용 싱글톤 스토어를 가져온다
import shareStore from "@/lib/share-store"; // 별칭이 안 되면 "../../../lib/share-store" 사용

export async function POST(req: NextRequest) {
  const { out } = await req.json();
  const id = crypto.randomBytes(5).toString("hex");
  shareStore.set(id, out);

  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return NextResponse.json({ url: `${base}/s/${id}` });
}
