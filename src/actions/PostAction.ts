
import { PostActionTypes, IPostTypeArray, Actions } from '../types/PostTypes';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { action } from 'typesafe-actions'
import axios from 'axios';

export const fetchRequest = () => action(PostActionTypes.FETCH_REQUEST);

export const fetchPosts:ActionCreator<ThunkAction<Promise<any>, IPostTypeArray, null, Actions>> = () => async dispatch => {
    dispatch(fetchRequest());
    const API = `https://id.techinasia.com/wp-json/techinasia/3.0/categories/startups/posts`;
    await axios.get(API)
        .then(res => {
            dispatch({
                type: PostActionTypes.FETCH_SUCCESS,
                payload: { 
                    posts: res.data.posts
                }
            });
        })
        .catch(err => {
            dispatch({
                type: PostActionTypes.FETCH_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
            console.error(`Something went wrong! ${err}`);
        })
}
export const fetchError = (message: string) => action(PostActionTypes.FETCH_ERROR, message);

