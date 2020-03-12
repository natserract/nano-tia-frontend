import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import * as PostAction from '../../actions/PostAction';
import PostsLists from '../../containers/PostsList';
import { Link } from 'react-router-dom';

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

    console.log(results);

    const RenderPost = () => {
        return loading ?  <span>Loading...</span> : (
            <PostsLists posts={results} postRender={item =>
                <div key={item.id}>
                    <Link to={`/post/${item.slug}`}>{item.title}</Link>
                </div>
            }/>
        )
    }

    return (
        <div>
            <RenderPost/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)