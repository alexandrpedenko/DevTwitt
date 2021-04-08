import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_CLEAR,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  GET_PROFPOST,
  UPDATE_LIKES
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  posts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        laoding: false
      };
    case GET_PROFPOST:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        profile: null,
        repos: [],
        posts: [],
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        )
      };
    default:
      return state;
  }
}
