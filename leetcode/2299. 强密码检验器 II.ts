function strongPasswordCheckerII (password: string): boolean {
  const len = password.length
  //  33 64 36 35 37 38 40 41
  // 42 43 45 94
  let sFlag = false
  let SFlag = false
  let nFlag = false
  let mFlag = false
  if (len < 8) return false
  for (let i = 0; i < len; i++) {
    const curCode = password.charCodeAt(i)
    if (password[i] === password[i + 1]) return false
    // 至少包含 一个小写英文 字母。
    if (!sFlag && curCode > 96 && curCode < 123) {
      sFlag = true
      continue
    }
    // 至少包含 一个大写英文 字母。
    if (!SFlag && curCode > 64 && curCode < 91) {
      SFlag = true
      continue
    }
    // 至少包含 一个数字 。
    if (!nFlag && curCode > 47 && curCode < 58) {
      nFlag = true
      continue
    }
    // 至少包含 一个特殊字符 。
    if ((!mFlag) && (curCode === 33 || curCode >= 35 || curCode <= 43 || curCode === 45 || curCode === 64 || curCode === 94)) {
      mFlag = true
      continue
    }
  }
  return sFlag && SFlag && nFlag && mFlag
};

console.log(strongPasswordCheckerII('IloveLe3tcode!'))
