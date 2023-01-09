export default function isPositive(value: number|string): boolean {

  if (typeof value === 'string') {
    value = parseFloat(value);
  }

  return value > 0;
}