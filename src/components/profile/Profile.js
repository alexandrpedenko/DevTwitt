import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import PostItem from "../posts/PostItem";
// Redux
import { connect } from "react-redux";
import { getProfileById, getProfPostsById } from "../../actions/profile";

const Profile = ({
  match,
  auth,
  profile: { loading, profile, posts },
  getProfileById,
  getProfPostsById
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getProfPostsById(match.params.id);
  }, [getProfileById, getProfPostsById, match.params.id]);

  const [tabsData, setTabsData] = useState({
    profileBio: "active",
    profilePosts: ""
  });

  const { profileBio, profilePosts } = tabsData;

  const profileBioSect = profile !== null && (
    <Fragment>
      <ProfileAbout profile={profile} />
      <div className='profile-exp pp-2'>
        <h3 className='text-primary'>Experience</h3>
        {profile.experience.length > 0 ? (
          <Fragment>
            {profile.experience.map(experience => (
              <ProfileExperience key={experience._id} experience={experience} />
            ))}
          </Fragment>
        ) : (
          <h4>No experience credentials...</h4>
        )}
      </div>
      <div className='profile-edu my-1 pp-2'>
        <h3 className='text-primary'>Education</h3>
        {profile.education.length > 0 ? (
          <Fragment>
            {profile.education.map(education => (
              <ProfileEducation key={education._id} education={education} />
            ))}
          </Fragment>
        ) : (
          <h4>No experience credentials...</h4>
        )}
      </div>
    </Fragment>
  );

  const profPosts =
    posts &&
    !loading &&
    posts.map(post => <PostItem key={post._id} post={post} />);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {profile === null ? (
            <Fragment>
              <p className='some-info'>
                You have not yet setup a profile, please add some info
              </p>
              <Link to='/create-profile' className='btn btn-inline my-1'>
                Create Proile
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to='/profiles' className='btn btn-light'>
                Back to Profiles
              </Link>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                  <Link to='/edit-profile' className='btn btn-dark'>
                    Edit Profile
                  </Link>
                )}
              <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <div className='profile-tab'>
                  <button
                    type='button'
                    className={`btn btn-profile ${profileBio}`}
                    onClick={() =>
                      setTabsData({ profileBio: "active", profilePosts: "" })
                    }
                  >
                    Profile
                  </button>
                  <button
                    type='button'
                    className={`btn btn-profile ${profilePosts}`}
                    onClick={() =>
                      setTabsData({ profileBio: "", profilePosts: "active" })
                    }
                  >
                    Posts
                  </button>
                </div>
                {profilePosts === "active" ? profPosts : profileBioSect}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById, getProfPostsById })(
  Profile
);
