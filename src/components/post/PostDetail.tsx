
import * as React from 'react'
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { RootState } from '../../reducers';
import * as PostAction from '../../actions/PostAction';
import * as Helpers from '../../helpers/PostFinder'

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

const ProductDetail:React.FC<Props> = ({ postDispatch, results }) => {
    const params = useParams<RouteParamI>();
    React.useEffect(() => {
        postDispatch()
    }, [postDispatch]);

    const context = Helpers.findPostDetail(params, results);

    return context ? (
        <div>
            <p>{context?.title}</p>
            <span>{context?.content}</span>
        </div>
    ) : <Redirect to="/" /> 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)