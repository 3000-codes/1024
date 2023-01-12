function evaluate (s: string, knowledge: [string, string][]): string {
  const dict:Map<string, string> = new Map(knowledge)
  // const reg = /\(\w*\)/g
  // return s.replace(reg, (key) => dict.get(key.slice(1, -1)) || '?')

  const reg = /\((\w*)\)/g
  return s.replace(reg, (_, key) => dict.get(key) || '?')
};
