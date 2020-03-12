

import * as React from 'react'

export interface GenericListProps<T> {
    posts: T[];
    postRender: (item: T) => JSX.Element
}

type ComponentTypes<T = any> = React.FC<GenericListProps<T>>;

export const GenericListPosts:ComponentTypes = ({ posts, postRender }) => (
    <div className="post-item">{ posts.map(postRender)}</div>
)