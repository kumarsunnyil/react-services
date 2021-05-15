import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Gallery from './pages/gallery';


function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/gallery' component={Gallery} />
		<Route path='/contact' component={Contact} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
);
}

export default App;
