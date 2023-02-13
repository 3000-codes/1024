import { Component, ReactNode } from "react";
import { Button } from "@douyinfe/semi-ui";
export default class EventCom extends Component {

  render(): ReactNode {
    return (
      <div>
        <Button onClick={e => {
          console.log(e)
        }}>Click me</Button>
        <button onClick={e => {
          console.log(e)
        }}>Click me</button>
      </div>
    );
  }
}