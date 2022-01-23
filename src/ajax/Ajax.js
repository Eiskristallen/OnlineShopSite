//customize axios instance
//visualize data retrive progress 
//return data instead response object
//handle all request errors in one
import axios from 'axios';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
//create new axios instance

const instance = axios.create({
  baseURL:'/api',
  timeout:2000,
  headers:{'X-Custom-Header':'foobar'}
})

//configure request and response interceptor
// Add a request interceptor
instance.interceptors.request.use(config => {
  // Do something before request is sent
  //add progress bar
  nprogress.start();
  return config
});

// Add a response interceptor
instance.interceptors.response.use(response=> {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // return data instead response object
  //stop the progress bar no matter the data is being retrived or not
  nprogress.done();
  return response.data;
}, error => {
  nprogress.done();
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  alert('reqeust send fail:' + error.message || 'something wrong heppend')
  return Promise.reject(new Error('request fail'));
});

export default instance //export custom axios object