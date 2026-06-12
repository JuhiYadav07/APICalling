import {useState, useEffect} from 'react';
import {getPosts, getRandomUser} from "./api"
import PostCard from './Components/Postcard';
import UserCard from './Components/Usercard';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect (() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(()=> {
    getRandomUser().then((user) => setUserData(user[0]))
  }, []);

  console.log(userData);

  console.log("Data state:", data); 

  return (
  <div className="App">
    {userData && <UserCard data={userData} />}
    {
      data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : <p>No data</p>
    }
  </div>
  );
}

export default App;
