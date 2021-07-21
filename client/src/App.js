import React,{useState} from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

function App() {

  const [detail, setDetail] = useState([])

  return (
    <>
      <NavBar/>
      <ItemListContainer setDetail={setDetail}/>
      <ItemDetail product ={detail}/>
    </>
  );
}

export default App;
