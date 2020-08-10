import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'

//Components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import PageNotFound from './Pages/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import firebaseConfig from './Config/FirebaseConfig'

//init firebase
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <ToastContainer/>
        <UserContext.Provider value={{user, setUser}}>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="*" component={PageNotFound}></Route>
          </Switch>
          <Footer></Footer>
        </UserContext.Provider>
    </Router>
  );
}

export default App;
