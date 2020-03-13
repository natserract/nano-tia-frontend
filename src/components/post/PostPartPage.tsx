
import * as React from 'react';
import { PostMetaI } from './PostMeta';
import ReactHtmlParser from 'react-html-parser';
import { PostMeta } from './PostMeta';

const Post: React.FC<{ content: string } & PostMetaI> = ({ seoTitle, seoDescription, seoSlug, content }) => {
    return (
        <div className="main-content">
            <PostMeta
                seoTitle={seoTitle}
                seoDescription={seoDescription}
                seoSlug={seoSlug}
            />
            <h1>{ReactHtmlParser(seoTitle)}</h1>
            <article>{ReactHtmlParser(content)}</article>
        </div>
    )
}

export default Post