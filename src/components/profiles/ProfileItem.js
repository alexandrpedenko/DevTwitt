import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { name, avatar, _id },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className='profile-item'>
      <div className='profile-item__img'>
        <img className='round-img' src={avatar} alt={name} />
      </div>
      <div className='profile-item__cont'>
        <div className='profile-item__desc'>
          <h2>{name}</h2>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <p>{location}</p>
          <ul>
            {skills.map((skill, index) => (
              <li className='text-primary' key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/profile/${_id}`} className='btn btn-primary view-prof'>
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
