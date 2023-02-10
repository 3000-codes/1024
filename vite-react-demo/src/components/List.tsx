export default function List() {
  const obj = {
    name: 'zhangsan',
    age: 18,
    sex: "female"
  }
  return (
    <div>
      <h1>list</h1>
      <ul>
        {
          Object.entries(obj).map(([key, value]) => <li key={key}>{key}:{value}</li>)
        }
      </ul>
    </div>


  )
}