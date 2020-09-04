import React from "react";
import loginImg from "../../pexels.jpeg";
import Button from '@material-ui/core/Button';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  alertMsg() {
    alert("Congrats! Your account is created successfully.");
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="health" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
           {/* <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" placeholder="phone" />
            </div> */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
        <Button variant="contained" color="primary" onClick={this.alertMsg}>
        Register
        </Button>
         {/* <button type="button" className="btn" onClick={this.alertMsg}>
            Register
          </button>*/}
        </div>
      </div>
    );
  }
}