type Item={
  label:string,
  value?:string,
  children?:Item[]
}
type Data={
  [key:string]:string|{val:string,items:Data}

}
export default  function formm (data:Data):Item[] {
  const result:Item[] = []
  Object.entries(data).forEach(([key, value]) => {
    const tem:Item = {
      label: key
    }
    if (typeof value === 'string') {
      tem.value = value
    } else {
      tem.value = value.val
      tem.children = formm(value.items)
    }
    result.push(tem)
  })
  return result
}