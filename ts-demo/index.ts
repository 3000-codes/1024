const userSet = new Set(["matt", "sofia", "waqas"] as const);

userSet.has("aaaa");

type PersonMap = Record<string, string>;

let record: PersonMap = {
  1: "matt",
};
