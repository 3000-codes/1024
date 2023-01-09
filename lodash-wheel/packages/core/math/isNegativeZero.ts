export default function isNegativeZero(value: number|string): boolean {
  return Object.is(value,-0)|| Object.is(value, '-0');
}

export function isNegativeZero2(value: number|string): boolean {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }
  
    return value === 0 && 1 / value === -Infinity;
}

// const testValues:unknown[] = [0,-0,'0', '-0', '1', '-1', '00000', '-00000', 'foo', Infinity, -Infinity, NaN, null, undefined];
// for (const value of testValues) {
//   console.log(`${value} isNegativeZero: ${isNegativeZero(value as number|string)}`);
// }
