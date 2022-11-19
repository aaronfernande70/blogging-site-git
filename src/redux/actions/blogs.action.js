import { GET_ALL_BLOGS, STORE_ALL_BLOGS } from "../actionType";

export const getAllBlogs = () => async (dispatch) => {
  let apiUrl = `http://localhost:3000/blogs`;

  let response = await fetch(apiUrl);

  let data = await response.json();

  dispatch({
    type: GET_ALL_BLOGS,

    payload: data,
  });

  dispatch({
    type: STORE_ALL_BLOGS,

    payload: data,
  });
};
