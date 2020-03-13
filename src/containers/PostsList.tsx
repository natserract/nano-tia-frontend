import * as React from 'react';
import { GenericListPosts } from '../specialty/GenericPostLists';
import { Link } from 'react-router-dom';
import { IPostTypesProperties } from '../types/PostTypes';
import InfiniteScroll from "react-infinite-scroll-component";
import ReactHtmlParser from 'react-html-parser';

interface PropsI {
    results: IPostTypesProperties[],
    fetchMore: () => void
}

const PostsLists: React.FC<PropsI> = ({ results, fetchMore }) => (
    <InfiniteScroll dataLength={20} next={() => fetchMore()} hasMore={true} loader={null}>
        <GenericListPosts posts={results} postRender={item =>
            <div key={item.id} className="post-item">
                <h2><Link to={`/post/${item.slug}`}>{item.seo.title}</Link></h2>
                <article>
                    {ReactHtmlParser(item.seo.description)}
                </article>
            </div>
        } />
    </InfiniteScroll>
)

export default PostsLists;