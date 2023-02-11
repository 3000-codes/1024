import { Component } from "react";

class StateCom extends Component {
  constructor(props: any) {
    super(props);
  }
  state: Readonly<{
    x: number;
    y: number;
    z: number;
  }> = {
      x: 1,
      y: 2,
      z: 3,
    };
  handle = () => {
    setTimeout(() => {
      this.setState({
        x: this.state.x + 1,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        y: this.state.y + 1,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        z: this.state.z + 1,
      });
    }
      , 500);
    // this.forceUpdate();
  }
  render() {
    const { x, y, z } = this.state;
    console.log("render")
    return (
      <div>
        <p>x: {x}--y: {y}--z: {z}</p>
        <button onClick={() => {
          this.handle();
        }}>
          add
        </button>
      </div>
    );
  }
}

export default StateCom;