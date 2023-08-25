type Nullable<T> = { [P in keyof T]: T[P] | null }; // 将所有属性变为可null

interface Fn {
  (a: number, b: string): boolean;
}

type Fn1 = Parameters<Fn>; // 获取函数参数类型

// 类型守卫:is的正确使用方式

const isString = (val: unknown): val is string => typeof val === "string";

const printLength = (val: string | any[]) => {
  if (isString(val)) {
    console.log(val.length);
  } else {
    console.log(val.length);
  }
};
