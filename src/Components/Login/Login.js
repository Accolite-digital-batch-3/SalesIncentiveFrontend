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
            
        }
        else{
            console.log("Already called the page");
          var userInfo=JSON.parse(localStorage.getItem('userInfo'));
          if(userInfo!==null){
          if (userInfo.role === "admin") {
            history.push("/admin");
          } else if (userInfo.role === "sales person") {
            history.push("/home");
          }
        }
    }

  
    fetchlogin();
  }

    },[history])

  return (
    <div id='loginBox' className="Loginbody">
        <div className='loginstyle'>
           
                <LoginHelper />
        </div>
    </div>
  )
}

export default withRouter(Login);