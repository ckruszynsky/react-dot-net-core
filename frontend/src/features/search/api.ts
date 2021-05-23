import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/'
});

const responseBody = (response:AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

  export const search = async (searchTerm:string) => {
    return requests.get(`questions?search=${searchTerm}`);
  };