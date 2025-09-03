// src/lib/share-store.ts
import { Redis } from "@upstash/redis";

let redis: Redis | null = null;
try {
  redis = Redis.fromEnv(); // UPSTASH_* 있으면 활성화
} catch {
  redis = null;
}

// HMR에서도 유지되도록 글로벌 싱글톤 Map
const globalAny = globalThis as any;
const memory: Map<string, string> =
  globalAny._shareStore || (globalAny._shareStore = new Map<string, string>());

export async function setShare(id: string, value: string, ttlSeconds = 60 * 60 * 24 * 30) {
  if (redis) {
    await redis.set(`share:${id}`, value, { ex: ttlSeconds });
  } else {
    memory.set(id, value);
  }
}

export async function getShare(id: string): Promise<string | null> {
  if (redis) {
    const v = await redis.get<string>(`share:${id}`);
    return v ?? null;
  }
  return memory.get(id) ?? null;
}
