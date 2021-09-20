import axios from 'axios';

const fetchCategories = async () => {
  const {
    REACT_APP_WPAPI_BASE_URL: baseUrl,
    REACT_APP_WPAPI_SITE_ID: siteId,
    REACT_APP_WPAPI_CATEGORIES_PATH: categoriesPath
  } = process.env;
  const fetchUrl = `${baseUrl}/${siteId}${categoriesPath}`;
  const response = await axios.get(fetchUrl);

  return response.data;
}

export default fetchCategories;