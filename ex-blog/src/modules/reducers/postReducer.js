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
        postList: action.payload,
      }),
      [getPostsThunk.rejected]: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }),
    }
})

export default postSlice.reducer