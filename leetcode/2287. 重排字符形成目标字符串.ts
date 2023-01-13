function rearrangeCharacters (s: string, target: string): number {
  const sCounts:Map<string, number> = new Map()
  const targetCounts:Map<string, number> = new Map()
  let min = 100
  const n = s.length; const m = target.length
  for (let i = 0; i < m; i++) {
    const c = target[i]
    targetCounts.set(c, (targetCounts.get(c) || 0) + 1)
  }
  for (let i = 0; i < n; i++) {
    const c = s[i]
    if (targetCounts.has(c)) {
      sCounts.set(c, (sCounts.get(c) || 0) + 1)
    }
  }

  for (const [key] of targetCounts) {
    min = Math.min(Math.floor(sCounts.get(key)! / targetCounts.get(key)!), min) || 0
  }
  return min
};
