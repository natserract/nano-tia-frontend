import { combineReducers } from 'redux';
import { PostReducer } from './PostReducer';

export const RootReducer = combineReducers({
    results: PostReducer
})

export type RootState = ReturnType<typeof RootReducer>