import { Component } from "react";
export default class LoopBinding extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: '吃饭',
        count: 0
      },
      {
        id: 2,
        name: '睡觉',
        count: 0
      },
      {
        id: 3,
        name: '打豆豆',
        count: 0
      }]
  }
  increaseCount=(id:number)=>{
    const { habits } = this.state;
    const newHabits = habits.map((habit)=>{
      if(habit.id===id){
        return {...habit,count:habit.count+1}
      }
      return habit
    })
    this.setState({habits:newHabits})
  }
  render() {
    const { habits } = this.state;
    return (
      <div>
        <h1>LoopBinding</h1>
        <ul>
          {
            habits.map((habit,index) => {
              return (
                <li key={habit.id}>
                  <span>{habit.name}</span>
                  <span>{habit.count}</span>
                  <button onClick={
                    // this.increaseCount.bind(this,habit.id)
                    ()=>{
                      habit.count++
                      this.setState({habits})
                    }
                  }>+</button>
                  <button>-</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}