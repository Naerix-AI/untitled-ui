// src/lib/share-store.ts
// HMR/재시작에도 같은 인스턴스를 재사용하기 위한 singleton 패턴
const globalAny = globalThis as unknown as { _shareStore?: Map<string, string> };

export const shareStore: Map<string, string> =
  globalAny._shareStore || (globalAny._shareStore = new Map<string, string>());

export default shareStore;
