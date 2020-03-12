
import * as React from 'react'
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';
import * as Helpers from '../../helpers/PostFinder'
import { Loader } from '../../specialty/Loader';

interface RouteParamI {
    slug: string
}

const mapStateToProps = (state: RootState) => ({
    results: state.results.posts
})

const mapDispatchToProps = (dispatch) => ({
    postDispatch: (limit: string) => dispatch(PostAction.fetchPosts(limit))
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const LazyComponent = React.lazy(() => import("./PostPartPage"));

const PostDetail: React.FC<Props> = ({ postDispatch, results }) => {
    const params = useParams<RouteParamI>();
    React.useEffect(() => {
        postDispatch('20')
    }, [postDispatch]);

    const result = Helpers.findPostDetail(params, results);
    return result ? (
        <div className="container">
            <React.Suspense fallback={<Loader/>}>
                <LazyComponent
                    seoTitle={result?.seo.title}
                    seoDescription={result?.seo.description}
                    seoSlug={result?.slug}
                    content={result?.content}
                />
            </React.Suspense>
        </div>
    ) : <Redirect to="/" />
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)