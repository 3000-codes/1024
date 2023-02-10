import { useState } from 'react';
function HelloWorld(prop: { msg: string }) {
  const count=useState(0)
  console.log(count);
  
  return <div>{prop.msg}</div>;
}
export default HelloWorld;