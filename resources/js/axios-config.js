import NProgress from 'nprogress';

// before a request is made start the nprogress
axios.interceptors.request.use(config => {
    NProgress.start();
    return config;
})

// before a response is returned stop nprogress
axios.interceptors.response.use(response => {
    NProgress.done();
    return response;
})