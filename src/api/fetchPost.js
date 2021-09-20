import axios from 'axios';

const fetchPost = async slug => {
  const {
    REACT_APP_WPAPI_BASE_URL: baseUrl,
    REACT_APP_WPAPI_SITE_ID: siteId,
    REACT_APP_WPAPI_POSTS_PATH: postsPath,
    REACT_APP_WPAPI_POST_FIELDS_PARAMS: fields
  } = process.env;
  const fetchUrl = `${baseUrl}/${siteId}${postsPath}/slug:${slug}?fields=${fields}`;
  const response = await axios.get(fetchUrl);

  return response.data;
}

export default fetchPost;