import { createAction, handleActions, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { PostsApi } from '../../remote'
import { Map, List, fromJS } from 'immutable'

export const createPostApi = PostsApi.create;   // axios 객체 생성

export const GET_POSTS = "posts/GET"    // 액션 타입 정의
// 액션 생성 함수 정의
export const getPosts = createAction(
    GET_POSTS,
    PostsApi.getPosts   // payload
  )


const initialState = Map({
    // 요청이 진행중인지, 에러가 났는지의 여부는 더 이상 직접 관리 할 필요 없음 -> penderReducer 가 담당
    post: Map({
        title: '',
        content: ''
    })
  })
  
// payload에 해당
  export default handleActions ({
    ...pender({
        type: GET_POSTS,
        onSuccess: (state, action) => {
          return state.set("post", fromJS(action.payload.data));
        },
      })
  }, initialState)

