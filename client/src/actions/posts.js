import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        console.log('chal gaya');
        const { data } = await api.fetchPosts();
        console.log(data);
        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const createPosts = (post) => async (dispatch) => {
    console.log(post);
    try {
        const { data } = await api.createPosts(post);
        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (_id, post) => async (dispatch) => {

    try {
        const { data } = await api.updatedPost(_id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {

        // add id here to front end side

        await api.deletedpost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        // error.message is not good for debugging error:
        console.log(error);
    }
}

export const likePost = (_id) => async (dispatch) => {

    try {
        const { data } = await api.likePost(_id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}