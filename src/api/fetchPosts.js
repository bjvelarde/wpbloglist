import axios from 'axios';

const fetchPosts = async ({page = 1, category = ''}) => {
  const {
    REACT_APP_WPAPI_BASE_URL: baseUrl,
    REACT_APP_WPAPI_SITE_ID: siteId,
    REACT_APP_WPAPI_POSTS_PATH: postsPath,
    REACT_APP_WPAPI_POSTS_FIELDS_PARAMS: fields,
    REACT_APP_PER_PAGE: perPage
  } = process.env;
  const filter = category !== '' ? `&category=${category}` : '';
  const fetchUrl = `${baseUrl}/${siteId}${postsPath}?fields=${fields}&number=${perPage}&page=${page}${filter}`;
  const response = await axios.get(fetchUrl);

  return response.data;
}

export default fetchPosts;