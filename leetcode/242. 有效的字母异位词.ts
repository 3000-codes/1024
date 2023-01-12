/* eslint-disable no-unused-vars */
function isAnagram (s: string, t: string): boolean {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const flag = map.has(s[i])
    map.set(s[i], flag ? map.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) return false
    map.set(t[i], map.get(t[i]) - 1)
  }
  for (const [_, value] of map) {
    if (value !== 0) return false
  }
  return true
};
