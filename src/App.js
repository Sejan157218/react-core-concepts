import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends=[
    {name : "sejan",Profession : "React Developer"},
    {name : "sajal",Profession : "JS Developer"},
    {name : "sejan",Profession : "Web Developer"},
    {name : "ASH",Profession : "Python Developer"},
    {name : "ABC",Profession : "N/A"},
  ]
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
      <Counter></Counter>
      {
        friends.map(friend=><Friends name ={friend.name}  Profession ={friend.Profession} ></Friends>)
      }
      
      {/* <Person name ="sejan" Profession = "React Developer"></Person>
      <Person name ="sajal" Profession = "React Developer"></Person>
      <Fiends name ="ASH" Profession = "React Developer"></Fiends>
      <Fiends name ="ABC" Profession = "React Developer"></Fiends> */}
    </div>
  ); 
}
function Person(props){
  const personStyle = {
    backgroundColor: "#3f8193",
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #010308',
    margin: '20px',
  }
  return (
    <div style={{backgroundColor: "#3f8193",padding: '20px',borderRadius: '10px',border: '1px solid #010308',margin: '20px',}}>
      <h1>Name : {props.name}</h1>
      <h1>Profession : {props.Profession}</h1>
    </div>
  )
}
function Friends(props){
  return (
    <div className="person">
      <h1>Name : {props.name}</h1>
      <h1>Profession : {props.Profession}</h1>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(0);
  const handlerIncrease=()=>setCount (count + 1);
  const handlerDecrease=()=>setCount (count - 1);
  return (
    <div style={{backgroundColor: "#3f8193",padding: '20px',borderRadius: '10px',border: '1px solid #010308',margin: '20px',}}>
      <h1>Count : {count}</h1>
      <button onClick={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>
      
    </div>
  )
}
function ExternalUser(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  },[])
  return(
    <div className="person">
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div className="person">
      <h1>Name : {props.name}</h1>
      <h1>Eamil : {props.email}</h1>
    </div>
  )
}
export default App;
