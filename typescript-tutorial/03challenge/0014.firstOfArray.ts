import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]

// type First<T extends any[]> = T[0] extends undefined ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never//判断第一个是否有值
// type First<T extends any[]> = T extends [] ? never : T[0] //判断是不是空数组
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]//判断数组的长度是否为0
// type First<T> = T extends [infer P, ...infer Rest] ? P : never//推断第一个元素的类型
