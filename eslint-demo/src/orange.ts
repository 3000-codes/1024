const map:Map<number,number> = new Map();
export function getDays(n: number): number {
  if (n < 2) return n;
  if (map.has(n)) return map.get(n);
  const res = Math.min(
    (n % 2) + 1 + getDays(Math.floor(n / 2)),
    (n % 3) + 1 + getDays(Math.floor(n / 3))
  );
  map.set(n, res);
  return res;
}

// const day1=  getDays(2);
// console.log(day1);
for (let i = 1; i < 100; i++) {
  console.log(i, getDays(i));
}
