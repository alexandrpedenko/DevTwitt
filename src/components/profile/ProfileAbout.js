import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{name} Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}
      <br />
      <h2 className='text-primary'>Skill Set</h2>
      <ul className='skills'>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
