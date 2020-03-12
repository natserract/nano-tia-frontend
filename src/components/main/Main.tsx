import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';

const mapStateToProps = (state: RootState) => ({
    loading: state.results.loading,
    results: state.results.posts,
    errors: state.results.errors
});

const mapDispatchToProps = (dispatch) => ({
    postRequest: () => dispatch(PostAction.fetchRequest()),
    postDispatch: (limit: string) => dispatch(PostAction.fetchPosts(limit))
});

const LazyComponent = React.lazy(() => import('../../containers/PostsList'))

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Home: React.FC<Props> = ({ results, postDispatch, loading, errors, postRequest }) => {
    React.useEffect(() => {
        postDispatch('50');
    }, [postDispatch]);
    
    function fetchMore() {
        postDispatch('20');
    }

    //switch loader to suspense
    const RenderPost = () => {
        if (errors && !results.length) {
            return <span>Something went wrong!</span>
        } else {
            return (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <LazyComponent fetchMore={() => fetchMore()} results={results} />
                </React.Suspense>
            )
        }
    }

    return <RenderPost />
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)