import React, { useEffect } from 'react'
import "../Login/Login.css"
import LoginHelper  from './LoginHelper';
import {withRouter, useHistory} from 'react-router-dom'

function Login () {

    const history = useHistory();

    useEffect(()=>{
        function fetchlogin(){
        if(localStorage.getItem('userEmail')!=="null"){
            alert("You have already Logged in");
            console.log(localStorage.getItem('userEmail'));
            history.push("/admin");
        }
        else{
            console.log("Already called the page");
        }
    }

    fetchlogin();

    },[history])

  return (
    <div id='loginBox' className="Loginbody">
    <div className='loginstyle'>
        <h1 className="login">Sales Incentive Management System</h1>
            <LoginHelper />
    </div>
</div>
  )
}

export default withRouter(Login);