import * as React from 'react';
import { GenericListPosts } from '../../specialty/GenericPostLists';
import { Link } from 'react-router-dom';
import { IPostTypesProperties } from '../../types/PostTypes';
import ReactHtmlParser from 'react-html-parser';

interface PropsI {
    results: IPostTypesProperties[],
}

const PostsLists: React.FC<PropsI> = ({ results }) => (
    <GenericListPosts posts={results} postRender={item =>
        <div key={item.id} className="post-item">
            <h2><Link to={`/post/${item.slug}`}>{item.seo.title}</Link></h2>
            <article>
                {ReactHtmlParser(item.seo.description)}
            </article>
        </div>
    } />
)

export default PostsLists;