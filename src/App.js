import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import Login from './pages/login/login'
import Home from './pages/admin/home'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path='/login' component={Login}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;
