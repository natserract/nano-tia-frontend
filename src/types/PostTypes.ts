
export enum PostActionTypes {
    FETCH_REQUEST = '@@posts/FETCH_REQUEST',
    FETCH_SUCCESS = '@@posts/FETCH_SUCCESS',
    FETCH_ERROR = '@@posts/FETCH_ERROR'
}

export interface SEO {
    title: string,
    description: string 
}

export interface IPostTypesProperties {
    id: string,
    slug: string,
    title: string,
    content: string,
    seo: SEO
}
export interface IPostTypeArray {
    readonly posts: IPostTypesProperties[],
}

export interface IPostTypesState extends IPostTypeArray {
    readonly loading: boolean,
    readonly errors?: string
}

export type Actions = 
    | { type: PostActionTypes.FETCH_REQUEST }
    | { type: PostActionTypes.FETCH_SUCCESS; payload: IPostTypeArray }
    | { type: PostActionTypes.FETCH_ERROR; payload: { message: string }}
