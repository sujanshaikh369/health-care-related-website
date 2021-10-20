import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Training from './components/Training/Training';
import Hiitzone from './components/Hiitzone/Hiitzone';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/showdetails/:id">
            <ShowDetails></ShowDetails>
          </PrivateRoute>
          <Route  path="/about">
            <About/>
          </Route>
          <Route  path="/training">
            <Training/>
          </Route>
          <Route  path="/hiitzone">
            <Hiitzone/>
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route  path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
