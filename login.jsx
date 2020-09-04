import React from "react";
import loginImg from "../../pexels.jpeg";
import Button from '@material-ui/core/Button';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  alertMsg() {
    alert("Success! You login.");
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="health"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
       {/*  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
    </div> */}
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
        </div>
        <div className="footer">
        <Button variant="contained" color="primary" onClick={this.alertMsg}>
         Login
        </Button>
          {/* <button type="button" className="btn" onClick={this.alertMsg}>
            Login
          </button>*/}
        </div>
      </div>
      </div>
    );
  }
}