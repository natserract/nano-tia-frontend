
import { PostActionTypes, IPostTypeArray, Actions } from '../types/PostTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { action } from 'typesafe-actions'
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    dispatch(fetchRequest());
    await axios.get("https://id.techinasia.com/wp-json/techinasia/3.0/categories/startups/posts?page=1&per_page=5")
        .then(res => {
            dispatch(fetchSuccess(res.data.posts))
        });
}

export const fetchRequest = () => action(PostActionTypes.FETCH_REQUEST);

export const fetchSuccess = posts => ({
    type: PostActionTypes.FETCH_SUCCESS,
    payload: { posts }
})
export const fetchError = (message: string) => action(PostActionTypes.FETCH_ERROR, message);

