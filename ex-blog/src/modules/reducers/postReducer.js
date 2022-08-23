import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PostsApi } from '../../remote'

const initialState = {
    loading: false, 
    postList: [],
    error: null
}

export const getPostsThunk = createAsyncThunk(
    'postSlice/getPostsThunk',
    PostsApi.getPosts
)

export const createPostThunk = createAsyncThunk(
    'postSlice/createPostThunk',
    PostsApi.createPost
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
    [getPostsThunk.pending]: (state, action) => ({
        ...state,
        loading: true,
      }),
      [getPostsThunk.fulfilled]: (state, action) => ({
        ...state,
        loading: false,
        postList: action.payload.data,
      }),
      [getPostsThunk.rejected]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload.data,
      }),
      [createPostThunk.pending]: (state, action) => ({
        ...state,
        loading: true,
      }),
      [createPostThunk.fulfilled]: (state, action) => ({
        ...state,
        loading: false,
        postList: action.payload.data,
      }),
      [createPostThunk.rejected]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload.data,
      }),
    }
})

export default postSlice.reducer