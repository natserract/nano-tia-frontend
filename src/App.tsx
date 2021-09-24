import * as React from 'react';
import Layout from './containers/Layout'

import "./App.css";

// export const store = configureStore();

export default (props) => (
    // <Provider store={store}>
    <Layout>
        {props.children}
    </Layout>
    // </Provider>
)