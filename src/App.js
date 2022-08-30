import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App()
{
  const [userList, setUserList] = useState([])
  const onAddUser = (name, age) =>
  {
    setUserList(((prevList) =>
    {
      return [...prevList, { name: name, age: age, id: Math.random().toString() }]
    }))
  }
  return (
    <>
      <AddUser onAddUser={onAddUser} />
      <UserList users={userList} />
    </>
  );
}

export default App;
