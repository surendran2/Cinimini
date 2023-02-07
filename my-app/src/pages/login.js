import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Index from './Index';
import background from './img/cini_background.jpg';
import {useLocation} from 'react-router-dom';




// import React from 'react';
// import ReactDom from 'react-dom';

// import './App.css';
//  const App =() => {

function Login() {
  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginstatus, setLoginStatus] = useState('');
  const location = useLocation();

  Axios.defaults.withCredentials = true;

  const login = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:3001/login',
      { username: username, password: password }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        }
        else {
          setLoginStatus(response.data[0].username);
          history("/index", { state: { id: 1, name: "Welcome " + response.data[0].username } });

        }
        console.log("response....>", response);
      });

  };
// if(location.state.name == 'Registered Successful')
// {
//   console.log(location);
//   var setmsg = <div class="toast show">
//   <div class="toast-header">
//     <strong class="me-auto">Registered Success</strong>
//     <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
//   </div>
// </div>
// }

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      // console.log(response);
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);

      }
    })
 
    // if (loginstatus) {
   
    // }
    console.log('setmsg--->', setmsg)


    // Axios.get('http://localhost:3001/index').then((response)=>{
    //   // console.log(response);
    //   if(response.data.loggedIn = true)
    //   {
    //     setLoginStatus(response.data.user[0].username);

    //   }
    // })
  },)
var setmsg;
if(loginstatus)
{
  var successmesge = <div class="toast show">
  <div class="toast-header">
    <strong class="me-auto">Login Error</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    <p>{loginstatus}</p>
  </div>
</div>
}


  return (
    <div className="App">
      <div className='registration'>

        <body class="hold-transition login-page" style={{ backgroundImage: `url(${background})`, }}>

          <div class="login-box">
            {setmsg}
            {successmesge}
            <div class="login-logo">
              <p style={{ color: 'red' }}><b>Cini</b>MINI</p>
            </div>

            <div class="card">
              <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <form onSubmit={login}>

                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" required onChange={(e) => {
                      setUsername(e.target.value);
                    }} />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-user"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" required onChange={(e) => {
                      setPassword(e.target.value);
                    }} />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      {/* <div class="icheck-primary">
<input type="checkbox" id="remember"/>
<label for="remember">
Remember Me
</label>
</div> */}
                    </div>

                    <div class="col-4">
                      <button type="submit" class="btn btn-primary btn-block" >Sign In</button>
                    </div>

                  </div>
                </form>



                <p class="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p class="mb-0">
                  <a href="/register" class="text-center" >Register a new membership</a>
                </p>

              </div>

            </div>
          </div>
        </body>
      </div>
      {/* <h1>{loginstatus}</h1> */}
    </div>
  );



  // ReactDom.render(<RegisterForm />, document.getElementById('root'));


}
export default Login;