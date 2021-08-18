import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Student from "./student.js";
import "../App.css";
import XLSX from "xlsx";
class ViewJobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      jobKeys: [],
      checkAdmin: false,
      company: "",
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(() => {
      if (firebase.auth().currentUser) {
        var currentEmail = firebase.auth().currentUser.email;
        if (currentEmail == "admin@gmail.com") {
          this.setState({
            checkAdmin: true,
          });
        }

        firebase
          .database()
          .ref("jobs")
          .on("value", (snap) => {
            let obj = snap.val();
            console.log(obj);
            let jobs = [];
            let jobKeys = [];
            for (let key in obj) {
              jobKeys.push(key);
              jobs.push(obj[key]);
            }
            // console.log(jobKeys);
            this.setState({
              jobs: jobs,
              jobKeys: jobKeys,
            });
            // console.log(this.state);
          });
      }
    });
  }

  deletejob(index) {
    var key = this.state.jobKeys[index];
    //    alert();
    //    console.log(keys);
    firebase
      .database()
      .ref("jobs/" + key)
      .remove();
  }
  StudentsApplied(index) {
    console.log(this.state.jobs[index].jobTitle);
    var currentCompany = this.state.jobs[index].jobTitle;
    console.log(JSON.stringify(this.state.jobs[index].apply));
    var students = XLSX.utils.book_new();
    var s = [];
    for (var key of Object.keys(this.state.jobs[index].apply)) {
      s.push(this.state.jobs[index].apply[key]);
    }
    var studs = XLSX.utils.json_to_sheet(s);
    XLSX.utils.book_append_sheet(students, studs, "students");
    XLSX.writeFile(students, currentCompany + ".xlsx");
  }
  Applyjob(index) {
    var currentUser = firebase.auth().currentUser;
    var currentId = firebase.auth().currentUser.uid;
    console.log(currentUser);
    // console.log(snap.val());
    firebase
      .database()
      .ref("cv/" + currentId)
      .on("value", (snap) => {
        let obj = snap.val() || {
          name: currentUser.displayName,
          email: currentUser.email,
        };
        obj.jobTitle = this.state.jobs[index].jobTitle;
        console.log("Details " + JSON.stringify(obj));
        //  console.log(obj);
        var rootRef = firebase.database().ref();
        const speedRef = rootRef
          .child("jobs/" + this.state.jobKeys[index] + "/apply/" + currentId)
          .set(obj);
      });
    alert("Applied");
  }
  render() {
    return (
      <div className="">
        <ul className="allList">
          <h1>All Jobs</h1>
          {this.state.jobs.map((job, index) => (
            //         if(job.apply){
            // var applyList = [];
            // for(let a in job.apply){
            //     applyList.push(job.apply[a])
            // }

            // return(
            <li className="eachList" key={index}>
              {<span>Company Name: </span>} {job.jobTitle} <br />
              {<span>Salary: </span>} {job.salary} <br />
              {<span>Job Title: </span>} {job.jobDescription} <br />
              {this.state.checkAdmin ? (
                <div style={{ display: "flex" }}>
                  <button onClick={this.deletejob.bind(this, index)}>
                    Delete
                  </button>
                  <button onClick={this.StudentsApplied.bind(this, index)}>
                    Students Applied
                  </button>
                </div>
              ) : (
                <button
                  style={{
                    fontFamily: "Segoe UI",
                    color: "white",
                    backgroundColor: "#008CBA",
                  }}
                  onClick={this.Applyjob.bind(this, index)}
                >
                  Apply
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ViewJobs;

// {applyList &&
//     <tr>
//         <td colSpan={2}>
//             <h2 className="text-center">Apply By {applyList.length} Candidats</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Skills</th>
//                         <th>Interest</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {applyList.map((cv, key)=>(
//                         <tr key={key}>
//                             <td>{(cv.name       || '-')}</td>
//                             <td>{(cv.email      || '-')}</td>
//                             <td>{(cv.mobile     || '-')}</td>
//                             <td>{(cv.skill      || '-')}</td>
//                             <td>{(cv.interest   || '-')}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </td>
//     </tr>
// }
