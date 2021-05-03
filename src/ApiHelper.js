import axios from 'axios';

const API_URL = 'https://scalio-posts-server.herokuapp.com/posts/';

const getPost = async function (id){
    try {
        const { data: post } = await axios.get(`${API_URL}${id}`)
        return {
            post,
            error: false,
            message: "Found posts."
        };
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            return {
                post: null,
                error: true,
                message: error.response.data.message
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    }
    
};

const getAllPosts = async function (){
    try {
        const { data: posts } = await axios.get(`${API_URL}`)
        return {
            posts,
            error: false,
            message: "Found posts."
        };
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code

            return {
                posts: null,
                error: true,
                message: `${error.response.status} : ${error.response.data}`
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    }
    
};

const apiMethods = { getAllPosts, getPost }

export default apiMethods;
