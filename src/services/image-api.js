import axios from 'axios';

const key = '16322040-a1680f58c95db15607ca17c03';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const imageApi = ({ query = '', currentPage = 1 }) => {
  return axios
    .get(
      `?key=${key}&q=${query}&page=${currentPage}&per_page=${'12'}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default imageApi;
