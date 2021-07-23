import React,{useState} from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  const [detail, setDetail] = useState([])

  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/products'} component ={ItemListContainer} />
        <Route path ={'/category/:id'} component={ItemListContainer}/>
        <Route path={'/product/:id'} component={ItemDetail}/>
      </Switch>

    </Router>

    </>
  );
}

export default App;
