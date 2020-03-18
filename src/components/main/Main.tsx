import * as React from 'react'
import * as PostAction from '../../actions/PostAction';
import { connect } from 'react-redux';
import { Loader } from '../../specialty/Loader';
import { RootState } from '../../reducers/Index';

const mapStateToProps = (state: RootState) => ({
    loading: state.results.loading,
    results: state.results.posts,
    errors: state.results.errors
});

const mapDispatchToProps = (dispatch) => ({
    postDispatch: () => dispatch(PostAction.fetchPosts())
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const LazyPostsList = React.lazy(() => import('./MainPostLists'))

const Main: React.FC<Props> = ({ results, postDispatch, errors, loading }) => {
    React.useEffect(() => {
        postDispatch();
    }, [postDispatch]);

    const PostMain = () => {
        if (loading && !results.length) {
            return <Loader />
        } else if (errors && !results.length) {
            return <span>Something went wrong!</span>
        } else {
            return (
                <React.Suspense fallback={null}>
                    <LazyPostsList results={results} />
                </React.Suspense>
            )
        }
    }

    return (
        <div className="container">
            <PostMain />
        </div >

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)