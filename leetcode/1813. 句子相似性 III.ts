function areSentencesSimilar (sentence1: string, sentence2: string): boolean {
  const arr1 = sentence1.split(' ')
  const arr2 = sentence2.split(' ')
  let x = 0; let y = 0
  while (x < arr1.length && x < arr2.length && arr1[x] === arr2[x]) {
    x++
  }
  while (y < arr1.length && y < arr2.length && arr1[arr1.length - 1 - y] === arr2[arr2.length - 1 - y]) {
    y++
  }
  return x + y >= arr1.length || x + y >= arr2.length
};
console.log(areSentencesSimilar('My name is Haley', 'My Haley'))
