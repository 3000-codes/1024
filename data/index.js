export default  function formm (data) {
  const result = []
  Object.entries(data).forEach(([key, value]) => {
    const tem = {
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