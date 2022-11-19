import { GET_ALL_BLOGS, STORE_ALL_BLOGS } from "../actionType";

const InitialState = {
  allBlogs: [],
  allBlogs_loaded: false,
};

export const blogReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action.payload,
      };
    case STORE_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action.payload,
        allBlogs_loaded: false,
      };

    default:
      return state;
  }
};
