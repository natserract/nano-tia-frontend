import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';
import { PostsLists } from '../../containers/PostsList';

const mapStateToProps = (state: RootState) => ({
    loading: state.results.loading,
    results: state.results.posts,
    errors: state.results.errors
});

const mapDispatchToProps = (dispatch) => ({
    postDispatch: () => dispatch(PostAction.fetchPosts())
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Home: React.FC<Props> = ({ results, postDispatch, loading, errors }) => {
    React.useEffect(() => {
        postDispatch()
    }, [postDispatch]);

    //make more readable
    const RenderPost = () => {
        if(loading && !results.length) {
            return <span>Loading...</span>
        } else if (errors && !results.length) {
            return <span>Something went wrong!</span>
        } else {
            return (
                <PostsLists results={results}/>
            )
        }
    }

    console.log(process.env);

    return <RenderPost/>
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)