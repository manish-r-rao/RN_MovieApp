import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors (e.g., auth tokens)
axiosInstance.interceptors.request.use(
  async (config) => {
    // You can inject tokens here if needed (e.g. using AsyncStorage or SecureStore)
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;