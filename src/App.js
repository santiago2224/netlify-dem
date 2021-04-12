import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2').then(res=>{
      setUsers(res.data.data)
    })
  },[])
  return (
    <div className="App">
        <h1>Santiago's Resume</h1>
        <pre>
          {JSON.stringify(users)}
        </pre>
    </div>
  );
}
export default App;