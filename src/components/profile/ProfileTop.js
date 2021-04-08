import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({ profile }) => {
  const {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  } = profile;

  return (
    <div className='profile-top p-2'>
      <div className='profile-top-img'>
        <img className='round-img my-1' src={avatar} alt='' />
      </div>
      <div className='profile-top-cont'>
        <h1 className='large'>{name}</h1>
        <p className='lead'>
          {status}{" "}
          {company && (
            <span>
              {" "}
              at {company} || {location && <span>{location}</span>}
            </span>
          )}
        </p>
        <div className='icons'>
          {website && (
            <a href={website} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-globe'></i>
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter'></i>
            </a>
          )}

          {social && social.facebook && (
            <a href='social.facebook' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook'></i>
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin'></i>
            </a>
          )}

          {social && social.youtube && (
            <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-youtube'></i>
            </a>
          )}

          {social && social.instagram && (
            <a
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
