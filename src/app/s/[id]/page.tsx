import { notFound } from "next/navigation";
// ⬇️ 공용 스토어에서 직접 읽기
import shareStore from "@/lib/share-store"; // 별칭 안 되면 "../../lib/share-store"

export const dynamic = "force-dynamic";

export default async function Shared({ params }: { params: { id: string } }) {
  const data = shareStore.get(params.id);
  if (!data) return notFound();
  return (
    <main className="container mx-auto px-4 py-12">
      <article className="prose max-w-2xl whitespace-pre-wrap">{data}</article>
    </main>
  );
}
