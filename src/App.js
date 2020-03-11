import React, { Component ,useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let style = {
    color: 'cyan'
  }
  let list = ['React', 'Node', 'Express'];
  let person = {
    name: 'John Doe',
    profession : 'Web Developer'
  };
  let products = [
    {name : 'Realmi 5 Pro',price:'BDT-12375'},
    {name : 'Realmi 5i',price:'BDT-12400'},
    {name : 'Realmi 5', price: 'BDT-11375'},
    {name :'Realme X2', price: 'BDT-21990'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>{person.name}</h1>
        <h3>{person.profession}</h3>
        <Counter />
        <Users />

        {
          products.map(product => <Product products={product}/>)
        }
        
        <Test name="Steve Smith"/>
        <Test name="Kane Williamson"/>
        <Test name="De Kock"/>
        <Test />
        <TestFunction name='Test User' />
        <TestArray lists = {list}/>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(5);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  const handleDcrease = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick = {handleDcrease}>Decrease</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
          users.map(user => <li>{user.name}</li>)
      }</ul>
    </div>
  )
}
function Product(props) {
  let productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    float: 'left',
    margin: '5px',
    padding: '3px',
    height: '200px',
    width: '250px',
    boxShadow : '5px 5px 10px lightgray'
  }
  let { name, price } = props.products;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  );
}
class Test extends Component{
  render() {
    return (
      <div style={{ border: '1px solid red',width:'400px',padding:'2px',margin:'2px',borderRadius:'5px'}}>
        <h1>Class Based Result For {this.props.name}.</h1>
      <h3>Basic Data</h3>
      </div>  
    );
  }
}
function TestFunction(props) {
  return <h1>Functional Data for {props.name}</h1>
}
function TestArray(props) {
  return (
    <ul>
      {props.lists.map((list,index) => {
        return <li key={index}> {list} </li>
        })}
    </ul>
  )
}
Test.defaultProps = {
  name :'Nothing Provided'
};
export default App;
