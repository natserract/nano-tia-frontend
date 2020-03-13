

import { IPostTypesProperties } from '../types/PostTypes';

export function findPostDetail(params, state): IPostTypesProperties {
    const checkDataOnStore: boolean = state.some(item => item.slug === params.slug)
    
    const result = state.find(el => {
        if (checkDataOnStore) return el.slug === params.slug
    })

    return checkDataOnStore ? result : false
}
