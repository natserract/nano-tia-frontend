import { createStore, compose, applyMiddleware } from 'redux';
import { RootReducer } from '../reducers';
import thunk from 'redux-thunk'

export default function configureStore() {
    const composeEnchancers  = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enchancers = composeEnchancers(applyMiddleware(thunk));

    return createStore(
        RootReducer,
        enchancers
    )
};
