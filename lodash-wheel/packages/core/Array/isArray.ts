import isPositive from "../math/isPositive";
const isArray = Array.isArray;
const isArrayLike = (value: any): value is ArrayLike<any> =>
  value != null &&
  typeof value != "function" &&
  typeof value.length == "number" &&
  isPositive(value.length);

export { isArray, isArrayLike };
