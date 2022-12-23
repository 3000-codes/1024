import { useState } from 'react';
function HelloWorld(prop: { msg: string }) {
  return <div>{prop.msg}</div>;
}
export default HelloWorld;