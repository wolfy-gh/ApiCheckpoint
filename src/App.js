import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './components/Users';

function App() {
  const [listUsers, setlistUsers] = useState([])
  const getAllusers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setlistUsers(res.data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getAllusers()
  }
    , [])
  return (
    <div className="App">
      <div className="header">
        <h1>List of Users</h1>
      </div>
        <List listUsers={listUsers} />
    </div>

  );
}

export default App;
