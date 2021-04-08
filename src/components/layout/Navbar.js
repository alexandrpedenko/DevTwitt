import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

const Navbar = ({ auth, logout }) => {
  const { isAuthenticated, loading, user } = auth;

  const authLinks = (
    <ul>
      <li>
        <Link to='/posts'>
          <i className='far fa-copy'></i> <span className='hide-sm'>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/profiles'>
          <i className='fas fa-users'></i>{" "}
          <span className='hide-sm'>Profiles</span>
        </Link>
      </li>
      <li>
        <Link to={`/profile/${user && user._id}`}>
          <i className='fas fa-user'></i>{" "}
          <span className='hide-sm'>My Profile</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-cogs'></i>{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a href='/' onClick={logout}>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/profiles'>Profiles</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <i className='fab fa-twitter'></i> DevTwitt
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
