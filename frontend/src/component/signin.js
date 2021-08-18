import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
// import { BrowserRouter as  Router,Route,Link } from "react-router-dom";
class Signin extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     students :[]

  //   }
  // }
  logIn() {
    var userEmail = this.refs.email.value;
    var userPass = this.refs.pass.value;
    const auth = firebase.auth();
    const promise = auth
      .signInWithEmailAndPassword(userEmail, userPass)
      .then((data) => {
        // this.props.history.push('/student');
        if (userEmail === "admin@gmail.com" && userPass === "admin12345") {
          this.props.history.push("/admin");
        } else if (
          userEmail === "company@gmail.com" &&
          userPass === "company12345"
        ) {
          this.props.history.push("/company");
        } else {
          var typeCheck;
          var userId = firebase.auth().currentUser.uid;
          var name = firebase.auth().currentUser.name;
          // console.log(userId);
          // console.log(firebase.auth().currentUser.displayName);
          localStorage.setItem("name", firebase.auth().currentUser.displayName);
          const rootRef = firebase.database().ref();
          const speedRef = rootRef.child("user/" + userId);
          speedRef.on("value", (snap) => {
            typeCheck = snap.val().type;
            if (typeCheck === "student") {
              this.props.history.push("/student");
            }
            if (typeCheck === "company") {
              this.props.history.push("/company");
            }
          });
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }
  render() {
    return (
      <div
        className="form"
        style={{
          backgroundColor: "#996633",
          marginLeft: "-12%",
        }}
      >
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            this.logIn.bind(this)();
          }}
        >
          <b>EMAIL:</b>
          <br />
          <input className="form-control" type="email" ref="email" />
          <br />
          <b>PASSWORD:</b>
          <br />
          <input className="form-control" type="password" ref="pass" />
          <br />
          <input
            type="submit"
            style={{
              fontFamily: "Segoe UI",
              color: "white",
              backgroundColor: "#008CBA",
            }}
            value="SIGN IN"
          />
        </form>
      </div>
    );
  }
}
export default Signin;
