import logo from './logo.svg';
import './App.css';

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

export default App;
