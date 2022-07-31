import React, { Component } from 'react'
import login from "../assests/login.jpg";
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginHelper extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleEmailChange = event =>{
        this.setState({
            email:event.target.value
        })
    }
    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }

    handleSubmit = event=>{
        
        console.log("Submitted");
        event.preventDefault();

        const {history} = this.props;

        const userLogin={
            'email':this.state.email,
            'password':this.state.password,
            'role':this.state.role,
        }

        console.log(userLogin);
        axios.post('http://localhost:8080/sales/adminlogin',userLogin).then(
            res=>{
                
                console.log(res.data);
                localStorage.setItem('userEmail',(res.data)?this.state.email:'null');
                console.log(localStorage.getItem('userEmail'));

                if(res.data) 
                {
                    alert('Logged in Succsesfully');
                }
                else alert("Invalid Username/password");
                console.log(this.state.role);
                if(localStorage.getItem('userEmail') === 'admin') {
                    //redirect to /admin
                    history.push("/admin");
                }else if (localStorage.getItem('userEmail') !== 'null'){
                    //redirect to /home
                    
                    history.push("/admin");
                }
                

            })
            .catch(err => {
                alert("Server refused to connect, please try later");
                console.log(err);
                
            }).finally(console.log(history));
    }


    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <div class="brand-logo">
                    <img src={login} className="img" alt="loginImage"></img>
                    </div>
                    <div class="brand-title">LOGIN</div>
                    <div class="inputs">
                        <label>EMAIL</label>
                        <input type="email" placeholder="example@test.com" id="email" onChange={this.handleEmailChange} value={this.useremail}/>
                        <label>PASSWORD</label>
                        <input type="password" placeholder="Min 6 charaters long" id="password" onChange={this.handlePasswordChange} value={this.password}/>
                        <button type="submit" id="submitButton">LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default withRouter(LoginHelper);