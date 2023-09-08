import { useState } from 'react'
import './App.css'
import Todo from './todo'
import Singers from './singers'
import Team from './count'
import Users from './users'
function App() {
  const [count, setCount] = useState(0)
  const singerArray = [
    { rank: 1, name: "Mahfuzur Rahman", age: 45 },
    { rank: 2, name: "Yoasobi", age: 25 },
    { rank: 3, name: "Chester Benington", age: "DEAD" }
  ]
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <Person name='shit' address="dan a jaye haray jabi"></Person> */}
      {/* <Person name="AnotherShit" address="Bam a jaye haray jabi"></Person> */}
      {/* <Todo isDone={false} task="More ja"></Todo>
      <Todo isDone={true} task="Aakam kor"></Todo>
      <Todo isDone={true} task="Ghuma"></Todo> */}
      {/* {
        singerArray.map(obj => <Singers name={obj.name} age={obj.age} rank={obj.rank}></Singers>)
      } */}
      <Users></Users>
      <Team></Team>
    </>
  )
}
function Person(props) {
  let { name, address } = props;
  console.log(name, ':', address)
  let s = {
    color: 'blue',
    backgroundColor: 'yellow',
    borderRadius: '8px',
    padding: '1rem'

  }
  let age = Math.random() * 100;
  return (
    <h1 style={s}>#Global billboard of 2023</h1>
  )
}
export default App
