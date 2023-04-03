import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { getApiBlogList } from '~/services'
import { BlogActions } from './Blog.redux'

export function* getBlogList(action: PayloadAction<any>): any {
  try {
    const res = yield call(getApiBlogList, action?.payload)
    if (res.ok) {
      yield put(BlogActions.getBlogsSuccess(res?.data))
    } else {
      yield put(BlogActions.getBlogsFail())
    }
  } catch (error: any) {
    yield put(BlogActions.getBlogsFail())
  }
}
