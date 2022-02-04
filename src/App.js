import React from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Provider } from './context';
import { Home } from './components/Home/Home';
import { Company } from './components/Company/Company';
import { Address } from './components/Address/Address';
import { Database } from './components/Database/Database';

class App extends React.Component {

  render() {
    return (
      <div>
        <Provider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/company' element={<Company />}></Route>
              <Route exact path='/address' element={<Address />}></Route>
              <Route exact path='/database' element={<Database />}></Route>
            </Routes>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App;
