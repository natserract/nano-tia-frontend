import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';
import { Loader } from '../../specialty/Loader';

const mapStateToProps = (state: RootState) => ({
    results: state.results.posts,
    errors: state.results.errors
});

const mapDispatchToProps = (dispatch) => ({
    postRequest: () => dispatch(PostAction.fetchRequest()),
    postDispatch: (limit: string) => dispatch(PostAction.fetchPosts(limit))
});

const LazyComponent = React.lazy(() => import('../../containers/PostsList'))

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Home: React.FC<Props> = ({ results, postDispatch, errors, postRequest }) => {
    React.useEffect(() => {
        postDispatch('10');
    }, [postDispatch]);


    //switch loader to suspense
    const RenderPost = () => {
        if (errors && !results.length) {
            return <span>Something went wrong!</span>
        } else {
            return (
                <React.Suspense fallback={<Loader/>}>
                    <LazyComponent fetchMore={() => postDispatch('20')} results={results} />
                </React.Suspense>
            )
        }
    }

    return (
        <div className="container">
            <RenderPost />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)