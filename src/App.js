
import React from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import UserForm from './UserForm';
import GitHub from './GitHub';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}


function App() {

  const user = {
    firstName: 'Greg',
    lastName: 'Lim',
    imageUrl: 'https://picsum.photos/200/300'
  };


  return (
    <div>
      
      <h1>
        Learn React Hooks
      </h1>
      Hello, {formatName(user)}
      <br />
      <Products />
      <br />
      <img src={user.imageUrl}></img>
      <br />
      <Button>Default</Button>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
      <UserForm/>

      
      <GitHub /><GitHub />

    </div>
  );
}
export default App;

