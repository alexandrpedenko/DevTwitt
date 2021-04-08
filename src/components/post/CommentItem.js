import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ comment, deleteComment, postId, auth }) => {
  const { _id, name, text, avatar, user, date } = comment;

  return (
    <div className='comment-item'>
      <div className='comment-item__avatar'>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt={name} />
          <h4>John Doe</h4>
        </Link>
      </div>
      <div className='comment-item__content'>
        <p className='post-date'>
          Posted on <Moment format='DD.MM.YYYY'>{date}</Moment>
        </p>
        <p className='my-1'>{text}</p>
        {auth.user !== null && !auth.loading && user === auth.user._id && (
          <button
            type='button'
            className='btn btn-danger'
            onClick={(e) => deleteComment(postId, _id)}
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default connect(null, { deleteComment })(CommentItem);
