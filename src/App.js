import React from 'react';
import $ from 'jquery';
import './App.css';
import './app_script.js';
import './assets/css/bootstrap.css';
import './assets/css/signin.css';
import white_logo from './assets/img/melbul-logo-white.png';
import app_logo   from './assets/img/melbul-logo.png';
import verify_btn from './assets/img/verify.png';
import vcode      from './assets/img/vcode.PNG';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {

    return (
    <div className="App">
        <svg viewBox="0 0 1440 983" fill="none" xmlns="http://www.w3.org/2000/svg" className="body-skin">
          <path d="M352.746 736.294C110.408 800.552 16.6076 927.539 0 983V0H1438.89C1446.19 29.3243 1420.95 86.0603 1261.52 78.4105C1062.22 68.8483 872.897 248.619 829.053 330.854C785.209 413.089 655.669 655.971 352.746 736.294Z" fill="#253352"/>
        </svg>
          <img src={white_logo} className="melbul-logo-white" />
          <img src={app_logo} className="melbul-logo" />
          <form className="form-signin" action="#" autoComplete="off">
            <p className="verify-i">Verify Your Email</p>
            <img className="melbul-verify mb-4 img-responsive" src={verify_btn} />
            <div className="card-body form-inner">
              <p className="h5 mb-3 four-digit">Enter 4-digit code sent to <strong>adetalent@yahoo.com</strong></p>
              <p className="v-code-p">
                <input type="text" className="form-control v-code" value="" readonly/>
                <input type="text" className="form-control v-code" value="" readonly/>
                <input type="text" className="form-control v-code" value="" readonly/>
                <input type="text" className="form-control v-code" value="" readonly/>
                <input type="text" id="v-code" maxLength="4" max="4" spellCheck="false" autoComplete="off" />
              </p>
              <button className="btn btn-lg btn-primary btn-block" id="v-btn" type="submit">Verify</button>
              <p className="mt-5 mb-3 text-muted ft-20">Step 2 of 5</p>
            </div>
          </form>
      </div>
    )
  }

}

export default Signup;