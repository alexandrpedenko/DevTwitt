import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import ComentForm from "./CommentForm";
import CommentItem from "./CommentItem";
// Redux
import { connect } from "react-redux";
import { getPost } from "../../actions/post";

const Post = ({ getPost, posts: { post, loading }, match, auth }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return (
    <section className='container'>
      {post === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/posts' className='btn btn-light'>
            Back To Posts
          </Link>
          <PostItem post={post} showDiscus={false} />
          {!loading && post !== null && auth.user !== null && !auth.loading && (
            <ComentForm postId={post._id} />
          )}

          {post.comments.length > 0 && (
            <div className='comments'>
              <h3>Comments</h3>
              {post.comments.map(comment => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  auth={auth}
                  postId={post._id}
                />
              ))}
            </div>
          )}
        </Fragment>
      )}
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost })(Post);
