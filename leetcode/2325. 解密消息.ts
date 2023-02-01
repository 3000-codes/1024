function decodeMessage (key: string, message: string): string {
  let cur = 'a'
  const rules = new Map()

  for (let i = 0; i < key.length; ++i) {
    const c = key[i]
    if (c !== ' ' && !rules.has(c)) {
      rules.set(c, cur)
      cur = String.fromCharCode(cur.charCodeAt(0) + 1)
    }
  }

  let ret = ''
  for (let i = 0; i < message.length; ++i) {
    let c = message[i]
    if (c !== ' ') {
      c = rules.get(c)
    }
    ret += c
  }

  return ret
};
