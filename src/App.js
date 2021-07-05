import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = 'Welcome to Bansky Store'

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  );
}

export default App;
