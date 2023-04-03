import { combineReducers } from 'redux'
import { BlogReducer } from './Blog/Blog.redux'

export const reducers = combineReducers<any, any>({
  blog: BlogReducer
})
