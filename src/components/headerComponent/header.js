import React, { Component } from 'react';
import {	
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (      
        <header>
            <div>this is the header</div>
            <Link to='/'>Home Page</Link>
            <br />
            <Link to='/otherpage'>Other Page</Link>
        </header>
    );
  }
}

export default Header;
