String.prototype.sliceStringtToArray = function (
  start: number,
  end?: number,
  step?: number
): String[] {
  const arr: String[] = [];
  if (end === undefined) {
    end = this.length;
  }
  if (step === undefined) {
    step = 1;
  }
  for (let i = start; i < end; i += step) {
    arr.push(this[i]);
  }
  return arr;
};
