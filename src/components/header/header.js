import React, { Component } from 'react';
import {	
	Link
} from 'react-router-dom';

import 'stylesheets/header.min.css'

class Header extends Component {
  render() {
    return (
			<div>
				<nav className='navbar navbar-default'>
					<div className='navbar-right'>
						<button type='submit' className='btn btn-default' data-toggle="modal" data-target="#login-modal">Login</button>
						<button type='submit' className='btn btn-default' data-toggle="modal" data-target="#register-modal">Register</button>
					</div>
				</nav>
				<div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="loginmodal-container">
							<h1>Login to Your Account</h1><br />
							<form>
								<input type="text" name="user" placeholder="Username" />
								<input type="password" name="pass" placeholder="Password" />
								<input type="submit" name="login" className="login loginmodal-submit" value="Login" />
							</form>
						</div>
					</div>
				</div>
				<div className="modal fade" id="register-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="loginmodal-container">
							<h1>Register Account</h1><br />
							<form>
								<input type="text" name="user" placeholder="Username" />
								<input type="text" name="email" placeholder="Email" />
								<input type="text" name="phone" placeholder="Phone Number" />
								<input type="password" name="pass" placeholder="Password" />
								<input type="password" name="comfirm-pass" placeholder="Comfirm password" />
								<input type="submit" name="login" className="login loginmodal-submit" value="Register" />
							</form>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Header;
