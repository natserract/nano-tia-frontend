
import * as React from 'react'
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { RootState } from '../../reducers/Index';
import * as PostAction from '../../actions/PostAction';
import * as Helpers from '../../helpers/PostFinder'
import { Helmet } from 'react-helmet';

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
            <Helmet titleTemplate="%s - nanoTIA" defaultTitle="My App">
                <title>{context?.seo.title}</title>
                <meta name="description" content={context?.seo.description}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={context?.seo.title}/>
                <meta property="og:url" content={`http://localhost:3000/${context?.slug}`}/>
            </Helmet>
            <h1>{context?.title}</h1>
            {context?.content}
        </div>
    ) : <Redirect to="/" /> 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)