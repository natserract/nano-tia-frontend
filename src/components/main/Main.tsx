import * as React from 'react'
import { connect } from 'react-redux';
import { RootState } from '../../reducers/Index';
import { Link } from 'react-router-dom';
import * as PostAction from '../../actions/PostAction';
import PostsLists from '../../containers/PostsList';

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

    const RenderPost = () => {
        return (loading && !results.length) ? <span>Loading...</span> : (errors && !results.length) ? 
            <span>Error!</span> : ( 
            <PostsLists posts={results} postRender={item =>
                    <div key={item.id}>
                        <Link to={`/post/${item.slug}`}>{item.seo.title}</Link>
                    </div>
                }/>
            )
    }

    return <RenderPost/>
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)