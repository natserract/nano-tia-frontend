
import * as React from 'react'
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';
import * as Helpers from '../../helpers/PostFinder'
import ReactHtmlParser from 'react-html-parser';
import { PostMeta } from './PostMeta';

interface RouteParamI {
    slug: string
}

const mapStateToProps = (state: RootState) => ({
    results: state.results.posts
})

const mapDispatchToProps = (dispatch) => ({
    postDispatch: () => dispatch(PostAction.fetchPosts())
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const PostDetail:React.FC<Props> = ({ postDispatch, results }) => {
    const params = useParams<RouteParamI>();
    React.useEffect(() => {
        postDispatch()
    }, [postDispatch]);

    const result = Helpers.findPostDetail(params, results);
    return result ? (
        <div>
           <PostMeta
                seoTitle={result?.seo.title}
                seoDescription={result?.seo.description}
                seoSlug={result?.slug}
           />
            <h1>{ReactHtmlParser(result?.title)}</h1>
            <div className="site-main-content">
                { ReactHtmlParser(result?.content) }
            </div>
        </div>
    ) : <Redirect to="/" /> 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)