import React, { Component } from "react";
import login from "../assests/login.jpg";
import { withRouter } from "react-router-dom";
import axios from "axios";

class LoginHelper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    //console.log("Submitted");
    event.preventDefault();

    const { history } = this.props;

    const userLogin = {
      email: this.state.email,
      password: this.state.password,
    };

    // console.log(userLogin);
    axios
      .post("http://localhost:8080/employees/login", userLogin)
      .then((res) => {
        //console.log(res.data);
        //console.log(localStorage.getItem('userEmail'));

        if(res.data===null)alert("Invalid Username/password");
        
        if (res.data.role === "admin") {
          localStorage.setItem('userInfo',JSON.stringify(res.data));
          history.push("/admin");
        } else if (res.data.role === "sales person") {
          localStorage.setItem('userInfo',JSON.stringify(res.data));
          history.push("/home");
        }
      })
      .catch((err) => {
        alert("Server refused to connect, please try later");
        console.log(err);
      })
      .finally(console.log(history));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div class="container">
            <div class="brand-logo">
              <img src={login} className="img" alt="loginImage"></img>
            </div>
            <div class="brand-title">LOGIN</div>
            <div class="inputs">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="example@test.com"
                id="email"
                onChange={this.handleEmailChange}
                value={this.useremail}
              />
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="Min 6 charaters long"
                id="password"
                onChange={this.handlePasswordChange}
                value={this.password}
              />
              <button type="submit" id="submitButton">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginHelper);