

import * as React from 'react';
import { GenericListPosts } from '../specialty/GenericPostLists';
import { Link } from 'react-router-dom';

interface PropsI {
    results: any,
}

export const PostsLists:React.FC<PropsI> = ({ results }) => (
    <GenericListPosts posts={results} postRender={item =>
        <div key={item.id}>
            <Link to={`/post/${item.slug}`}>{item.seo.title}</Link>
        </div>
    }/>
)
