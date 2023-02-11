import { useRef, FC, Component, createRef, ComponentRef } from 'react'
import { Button, Input } from '@douyinfe/semi-ui';
// const RefCom: FC = () => {
//   const ref = useRef(null)
//   const handleClick = () => {
//     console.log(ref.current)
//   }
//   return (
//     <div>
//       <input type="text" ref={ref} />
//       <button onClick={handleClick}>click</button>
//     </div>
//   )
// }

class RefCom extends Component {
  ref = createRef<HTMLInputElement>()
  state: Readonly<{
    count: number
  }>= {
    count: 0
  }
  handleClick = () => {
    console.log(this.ref.current)
  }
  render() {
    return (
      <div>
        <Input type="text" ref={this.ref} value={this.state.count} onInput={e=>this.setState({
          count: Number((e.target as HTMLInputElement).value)
        }) }/>
        <Button onClick={this.handleClick}>click</Button>
      </div>
    )
  }
}

export default RefCom