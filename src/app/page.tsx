"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-semibold">Build AI agents in minutes</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Launch a shareable agent demo with one click. No installs. No lock-in.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link href="/demo" className="px-5 py-3 rounded-lg border">
            Try the demo
          </Link>
          <Link href="/waitlist" className="px-5 py-3 rounded-lg bg-black text-white">
            Join the waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
