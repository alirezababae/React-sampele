import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
 class Nav extends Component {
    render() {
        return (
          <nav>
<h3>logo</h3>

<ul>

<Link to="/about">
<li>About</li>
</Link>
<Link to="/homeing">
<li>Home</li>
</Link>

<Link to="/list">
<li>List</li>
</Link>

</ul>

          </nav>
        )
    }
}

export default Nav
