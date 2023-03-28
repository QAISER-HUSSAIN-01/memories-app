import axios from 'axios';

const url = 'http://localhost:8000/posts';

export const fetchPosts = () => axios.get(url);
console.log(fetchPosts);
const {data} = fetchPosts();
console.log(data);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatedPost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
export const deletedpost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);
