import { notFound } from "next/navigation";
import { getShare } from "@/lib/share-store";

export const dynamic = "force-dynamic";

export default async function Shared({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;      // ✅ 반드시 await
  const data = await getShare(id);  // ✅ Promise 사용
  if (!data) return notFound();

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-2xl whitespace-pre-wrap">{data}</article>
    </main>
  );
}
