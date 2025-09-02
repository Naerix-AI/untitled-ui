"use client";
import { useState } from "react";

export default function Demo() {
  const [q, setQ] = useState("");
  const [out, setOut] = useState<string | null>(null);

  async function run() {
    const r = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const data = await r.json();
    setOut(data.result);
  }

  async function share() {
    if (!out) return;
    const r = await fetch("/api/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ out }),
    });
    const { url } = await r.json();
    await navigator.clipboard.writeText(url);
    alert("Share link copied!\n" + url);
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-3">
        <label className="block text-sm font-medium">Ask anything</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="e.g., Hello demo!"
          className="w-full rounded-lg border px-3 py-2"
        />
        <div className="flex gap-2">
          <button onClick={run} className="px-4 py-2 rounded-lg bg-black text-white">
            Run
          </button>
          <button
            onClick={share}
            disabled={!out}
            className="px-4 py-2 rounded-lg border disabled:opacity-50"
          >
            Share
          </button>
        </div>
        {out && (
          <pre className="mt-4 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">{out}</pre>
        )}
      </div>
    </main>
  );
}
