import useAxios from '@hooks/useAxios/useAxios';
import appConfig from "@constants/app-config";

const { BASE_API_URL } = appConfig;

const SearchAPI = {
  query: () => {
    return useAxios(
      {
        url: `${BASE_API_URL}/`,
        method: 'get',
      },
      { manual: true }
    );
  },
};

export default SearchAPI;
