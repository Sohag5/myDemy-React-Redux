import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/frontend/Home';
import Header from './components/frontend/Header';
import Login from './components/frontend/Login';
import Register from './components/frontend/Register';
import Dashboard from './components/backend/Dashboard';
import {PrivateRoute} from './components/PrivateRoute';
import Footer from './components/frontend/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
           <Header  />
            
            <Route exact path="/" component={Home}  />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
           <PrivateRoute path="/dashboard" component={Dashboard} />

          <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
