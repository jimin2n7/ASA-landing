import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
  blog: {} as any,
  isLoadingDetailBlog: false,
  blogList: [] as any[],
  isLoadingGetBlogList: false
}

const blogSlice = createSlice({
  initialState,
  name: 'Blog',
  reducers: {
    getBlogsRequest(state, action: PayloadAction<any>) {
      state.isLoadingGetBlogList = true
    },
    getBlogsSuccess(state, action: PayloadAction<any[]>) {
      state.blogList = action.payload
      state.isLoadingGetBlogList = false
    },
    getBlogsFail(state) {
      state.isLoadingGetBlogList = false
    }
  }
})

export const AppSelectors = {}

export const BlogActions = blogSlice.actions
export const BlogReducer = blogSlice.reducer
