
import * as React from 'react'
import { Helmet } from 'react-helmet';

export interface PostMetaI {
    seoTitle: string,
    seoDescription: string,
    seoSlug: string,
}

export const PostMeta: React.FC<PostMetaI> = ({ seoTitle, seoDescription, seoSlug }) => (
    <Helmet titleTemplate="%s - nanoTIA" defaultTitle="nanoTIA">
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle}/>
        <meta name="description" content={seoDescription}/>
        <meta name="keywords" content="Tech in Asia, startups, community, IT, tech, technology, asia, media, events, jobs, conference, platform, Singapore, Tokyo, Jakarta"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="author" content="nano TIA"/>
        <meta property="og:type" content="article"/>
        <meta property="og:title" content={seoTitle}/>
        <meta property="og:url" content={`http://localhost:3000/${seoSlug}`}/>
    </Helmet>
);