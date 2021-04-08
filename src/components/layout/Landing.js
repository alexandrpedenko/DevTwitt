import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='landing-pic'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <ul>
              <li>
                <i className='fas fa-search'></i> Read about what you are
                interested in.
              </li>
              <li>
                <i className='fas fa-user-friends'></i> Find out what people are
                discussing.
              </li>
              <li>
                <i className='far fa-comment-dots'></i> Join the correspondence.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='landing-inform'>
        <div className='landing-inform-wrap'>
          <h1>Find out what's happening in the IT world right now.</h1>
          <div className='buttons'>
            <Link to='/register' className='btn btn-reg'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-log-in'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
