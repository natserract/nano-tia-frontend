import * as React from 'react';
import { GenericListPosts } from '../specialty/GenericPostLists';
import { Link } from 'react-router-dom';
import { IPostTypesProperties } from '../types/PostTypes';
import InfiniteScroll from "react-infinite-scroll-component";

interface PropsI {
    results: IPostTypesProperties[],
    fetchMore: () => void
}

const PostsLists: React.FC<PropsI> = ({ results, fetchMore }) => (
    <InfiniteScroll dataLength={20} next={() => fetchMore()} hasMore={true} loader={null}>
        <GenericListPosts posts={results} postRender={item =>
            <Link key={item.id} to={`/post/${item.slug}`}>{item.seo.title}</Link>
        } />
    </InfiniteScroll>
)

export default PostsLists