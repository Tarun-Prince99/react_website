import React from 'react';
//import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from './js/nav.js';

function App() {
		      return (     
			        <div class="App">
			          <BrowserRouter>
			      	    <NavBar/>
			            <p>First check</p>
			          </BrowserRouter>  
			        </div>
	  	      );
}

export default App;
