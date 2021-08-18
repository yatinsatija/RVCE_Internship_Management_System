import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js'
// import Jobs from './component/jobs.js'
// import Jobs from './component/jobs.js'
// import ViewJobs from './component/ViewJobs.js'
// import Student from './component/student.js'
// import LoggedinPannel from '../src/component/LoggedinPanel.js'
// import signup from '../component/signup.js'
import { BrowserRouter as  Router,Route,Link } from "react-router-dom";
// import { browserRouter as Router ,Route}
import * as firebase from 'firebase';
 
//   Initialize Firebase
  var config = {
    // apiKey: "AIzaSyDDIs_dRPZATvBVdd8a7H9u8ZeKZimdrUA",
    // authDomain: "campus-recruitment-syste-725e0.firebaseapp.com",
    // databaseURL: "https://campus-recruitment-syste-725e0.firebaseio.com",
    // projectId: "campus-recruitment-syste-725e0",
    // storageBucket: "campus-recruitment-syste-725e0.appspot.com",
    // messagingSenderId: "739839788529"
    apiKey: "AIzaSyBt7QPaUjDXjmC6sKtlXZMWAdJ0n_TbFew",
    authDomain: "webtech-e3090.firebaseapp.com",
    databaseURL: "https://webtech-e3090-default-rtdb.firebaseio.com",
    projectId: "webtech-e3090",
    storageBucket: "webtech-e3090.appspot.com",
    messagingSenderId: "854668456226",
    appId: "1:854668456226:web:b1b4b8e9c22e8ea312357b"
  };
  firebase.initializeApp(config);

//   const appp = () => (
//   <div>
//   <h1>App</h1>
//   <Link to="/about">
//   About Component
//   </Link>
//   </div>
// );
//   const about = () => (
//     <div>
//   <h1>About</h1>
//   <Link to="/">
//   App Component
//   </Link>
//   </div>
// );

ReactDOM.render( <App /> ,document.getElementById('root'));