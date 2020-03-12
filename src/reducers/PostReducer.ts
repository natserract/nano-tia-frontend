
import { Reducer } from 'redux'
import { IPostTypesState, PostActionTypes, Actions } from '../types/PostTypes';

export const initialState: IPostTypesState = {
    posts: [],
    loading: false,
    errors: undefined,
};

const reducer: Reducer<IPostTypesState, Actions> = (state = initialState, action): IPostTypesState => {
    switch(action.type) {
        case PostActionTypes.FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case PostActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            }
        }
        case PostActionTypes.FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                errors: action.payload.message
            }
        }
        default: return state;
    }
}

export { reducer as PostReducer }