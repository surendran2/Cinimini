import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import background from './img/avengers.jpg';

// import Login from './login';



// import React from 'react';
// import ReactDom from 'react-dom';

// import './App.css';
//  const App =() => {

function Registration() {
  const history = useNavigate();

  const [usernameReg, setUsernameReg] = useState('');
  const [userpassword, setpasswordReg] = useState('');
  const [useremail, setemailReg] = useState('');
  const [responseMessage, getResponseMessage] = useState('');


  const Register = (e) => {
    // const notify = () => toast.success(location.state.name);
    var res;

    e.preventDefault();
    Axios.post('http://localhost:3001/register',
      { username: usernameReg, password: userpassword, email: useremail }).then((response) => {
        if (response.data.message == 'Registered Success') {
          getResponseMessage(response.data.message)

        }
      });
      console.log('responseMessage-->', res);

    if (usernameReg && userpassword && useremail) {
      history("/", { state: { id: 1, name: "Registered Successful" } });
    }
    else{
      history("/");

    }


  }
  console.log('responseMessage-->', responseMessage);


  return (
    <div className="App">

      <div className='registration'>
        {/* <body class="hold-transition register-page"> */}
        <body class="hold-transition register-page" style={{ backgroundImage: `url(${background})`, }}>

          <div class="register-box">
            <div class="register-logo">
              <a href="../../index2.html" style={{ color: 'red' }}><b>Cini</b>MINI</a>
            </div>
            <div class="card">
              <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>
                <form onSubmit={Register}>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Full name" onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }} required />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-user"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" onChange={(e) => {
                      setemailReg(e.target.value);
                    }} required />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => {
                      setpasswordReg(e.target.value);
                    }} required />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>

                  <div class="row">


                    <div class="col-4">
                      <button type="submit" class="btn btn-primary btn-block" >Register</button>
                    </div>

                  </div>
                </form>


                <a href="/login" class="text-center">I already have a membership</a>
              </div>

            </div>
          </div>

        </body>
      </div>

    </div>


  );



  // ReactDom.render(<RegisterForm />, document.getElementById('root'));

}
export default Registration;