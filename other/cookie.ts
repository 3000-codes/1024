// cookies

const getItem = (key: string) => {
  const cookies= document.cookie
  return decodeURIComponent(cookies.replace(new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(key).replace(/[-.+*]/g, '\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1')) || null
}

const setItem = (key: string, value: string, end?:number| Date, path?: string, domain?: string, secure?: boolean) => {
  if (!key || /^(?:expires|max-age|path|domain|secure)$/i.test(key)) { return false }
  let expires = ''
  if (end) {
    switch (end.constructor) {
      case Number:
        expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : `; max-age=${end}`
        break
      case String:
        expires = `; expires=${end}`
        break
      case Date:
        expires = `; expires=${(end as Date).toUTCString()}`
        break
    }
  }
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}${expires}${domain ? `; domain=${domain}` : ''}${path ? `; path=${path}` : ''}${secure ? '; secure' : ''}`
  return true
}

const hasItem = (key: string) => {
  return (new RegExp(`(?:^|;\\s*)${encodeURIComponent(key).replace(/[-.+*]/g, '\\$&')}\\s*\\=`)).test(document.cookie)
}

const keys= () => {
  const tKeys= document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|=\s*(?:[^;]*|$)/g, '').split(/\s*(?:=)\s*/);
  for(let i=0; i<tKeys.length; i++){
    tKeys[i] = decodeURIComponent(tKeys[i])
  }
  return tKeys
}

const removeItem = (key: string, path?: string, domain?: string) => {
  if (!key||!hasItem(key)) { return false }
  document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain ? `; domain=${domain}` : ''}${path ? `; path=${path}` : ''}`
  return true
}

const clear = () => {
  const tKeys= keys()
  for(let i=0; i<keys.length; i++){
    removeItem(tKeys[i])
  }
}

export default {
  getItem,
  setItem,
  hasItem,
  keys,
  removeItem,
  clear
}