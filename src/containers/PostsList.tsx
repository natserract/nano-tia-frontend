
import * as React from 'react'

export interface GenericListProps<T> {
    posts: T[];
    postRender: (item: T) => JSX.Element
}

type ComponentTypes<T = any> = React.FC<GenericListProps<T>>;

const GenericListPosts:ComponentTypes = ({ posts, postRender }) => {
    return (
        <div>{ posts.map(postRender)}</div>
    )
}
export default GenericListPosts