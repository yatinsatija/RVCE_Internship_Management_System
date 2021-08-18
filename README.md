# RVCE_Internship_Management_System

RVCE Internship Management System aims at providing the compatibility to simplify
the process of internships/placement for students.This system consists of a student login,
company login and an admin login. This is beneficial for college students, various companies
visiting the campus for recruitment and even the college placement officer. The software
system allows the students to create their profiles and upload all their details including their
marks onto the system. The admin can check each student's details and can remove faculty
accounts. The system also consists of a company login where various companies visiting the
college can view a list of students in that college and also their respective resumes. The
software system allows students to view a list of companies who have posted for vacancy.
The admin has overall rights over the system and can moderate and delete any details not
pertaining to college placement rules.<br/>

## Functional Requirements

The functional requirements of the project include:<br/>

1. <b>Login Authorization and User Registration</b><br/>
   The students can register by giving their username,email id and password. Only the
   registered students can access the features of the web application. Students need to
   provide their email and password to login to the web application. Admin and Company
   will be redirected to different pages on login with advanced features.

2. <b>Report Generation</b><br/>
   The company can login and view the details of those students who have applied for the
   job. The company can also download the details of the students in excel form for further
   use.

3. <b>Job Deletion</b><br/>
   Once the company finishes the hiring process the admin can delete the job posting of the
   company to avoid any confusion.

4. <b>Job Posting</b><br/>
   The company registered can post a job according to their requirements and this will be
   visible to all the registered users for application. The company can also view already
   posted previous jobs. The registered users can apply to the jobs that they are interested in.

5. <b>Email Notification</b><br/>
   Whenever a job is posted by any company an email notification will be sent to all the
   registered users informing them about the job posting. On receiving the email students
   can accordingly decide and apply for the job.

## Hardware Requirements

The hardware requirements for the project are as below:

1. Processor: `Pentium® Dual Core CPU, or Higher versions`, but supported on
   Embedded devices as well.
2. Hard Disk: Minimum `10GB`
3. Memory: Minimum `2GB RAM`

## Software Requirements

1. Frontend:`HTML`,`CSS`, `Reactjs`
2. Backend:`Nodejs`, `NodeMailer`
3. Database: `FireBase`

## Steps to install

1. Install NPM and node.js : Follow this link to setup https://phoenixnap.com/kb/install-node-js-npm-on-windows

2. After installing npm, install nodemon to run the backend service : type `npm install -g nodemon`

3. Clone the Repo: type `git clone https://github.com/yatinsatija/RVCE_Internship_Management_System.git`

4. Go to the directory where the project if cloned.

5. Do `npm install` for both frontend and backend folder separately.

6. Enter the frotend folder type `npm start` , it will run the frontend part on localhost.

7. Open separate terminal console and enter in the backend folder ,then type `nodemon index.js` ,this will run the backend service.

8. Now you can go the localhost url and test the project.

## Result Snippets

1. SIGNUP PAGE
   ![alt text](https://github.com/yatinsatija/RVCE_Internship_Management_System/blob/main/resultSnippets/SignUp.png)

2. ADMIN PAGE
   ![alt text](https://github.com/yatinsatija/RVCE_Internship_Management_System/blob/main/resultSnippets/AdminPortal.png)

3. ADMIN FUNCTIONALITY
   ![alt text](https://github.com/yatinsatija/RVCE_Internship_Management_System/blob/main/resultSnippets/AdminFunctionality.png)

4. RESPONSIVE EMAIL
   ![alt text](https://github.com/yatinsatija/RVCE_Internship_Management_System/blob/main/resultSnippets/ResponsiveEmails.png)

5. FIREBASE BACKEND
   ![alt text](https://github.com/yatinsatija/RVCE_Internship_Management_System/blob/main/resultSnippets/backend.png)
