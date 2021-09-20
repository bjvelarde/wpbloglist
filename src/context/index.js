import { useContext } from 'react';
import createDataContext from './createDataContext'
import fetchPostsApi from '../api/fetchPosts';
import fetchPostApi from '../api/fetchPost';
import fetchCategoriesApi from '../api/fetchCategories';

const ACTIONS = {
  FETCH_POSTS: 'fetch-posts',
  FETCH_POST: 'fetch-post',
  FILTER: 'filter',
  FETCH_CATEGORIES: 'fetch-categories',
  NAVIGATE: 'navigate',
};

const postsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_POSTS:
      return {...state, data: action.payload};
    case ACTIONS.FETCH_POST:
      return {...state, post: action.payload};
    case ACTIONS.FILTER:
      return {...state, category: action.payload};
    case ACTIONS.FETCH_CATEGORIES:
      return {...state, categories: action.payload};
    case ACTIONS.NAVIGATE:
      return {...state, page: action.payload};
    default: return state;
  }
}

const filterPosts = dispatch => category => {
  category = category === 'all' ? '' : category;
  dispatch({ type: ACTIONS.FILTER, payload: category })
}

const fetchPosts = dispatch => async (params) => {
  const data = await fetchPostsApi(params);
  dispatch({ type: ACTIONS.FETCH_POSTS, payload: data })
}

const fetchPost = dispatch => async (params) => {
  const data = await fetchPostApi(params);
  dispatch({ type: ACTIONS.FETCH_POST, payload: data })
}

const fetchCategories = dispatch => async () => {
  const data = await fetchCategoriesApi();
  dispatch({ type: ACTIONS.FETCH_CATEGORIES, payload: data.categories })
}

const navigate = dispatch => page => {
  dispatch({ type: ACTIONS.NAVIGATE, payload: page })
}

export const {Context, Provider} = createDataContext(
  postsReducer,
  {
    fetchPosts,
    fetchPost,
    filterPosts,
    navigate,
    fetchCategories
  },
  []
);

export const usePosts = () => {
  const {
    state,
    fetchPosts,
    fetchPost,
    filterPosts,
    navigate,
    fetchCategories
  } = useContext(Context);

  return {
    state,
    fetchPosts,
    fetchPost,
    filterPosts,
    navigate,
    fetchCategories
  };
};