import { createAction, createSlice } from "@reduxjs/toolkit";
import feedAPi from "../../api/feed";
const GLOBAL_RESET = createAction('GLOBAL_RESET');

const name = 'feed';

const initialState={
    users: null,
    feeds: null,
    feedById: null,
    isFeedsLoading: false
}

const slice = createSlice({
    name,
    initialState,
    reducers: {
        setUsers(state, {payload}) {
            state.users = payload;
        },
        setFeeds(state, {payload}) {
            state.feeds = payload;
        },
        setFeedById(state, {payload}) {
            state.feedById = payload
        },
        setIsFeedLoading(state, {payload}) {
            state.isFeedsLoading = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GLOBAL_RESET, () => {
            return initialState
        })
    }
})

export const {reducer} = slice;

export const actions = {
    users: () => async (dispatch: any) => {
        try{
        
        const response = await feedAPi.users();
        dispatch(slice.actions.setUsers(response));

        } catch(err) {
            console.error(err);
        }
    },
        feeds: (params={}) => async (dispatch: any) => {
        try{
        dispatch(slice.actions.setIsFeedLoading(true))    
        const response = await feedAPi.feeds(params);
        dispatch(slice.actions.setFeeds(response));
        return response
        } catch(err) {
            console.error(err);
        } finally {
          dispatch(slice.actions.setIsFeedLoading(false))    
 
        }
    },
        feedById: (id: any) => async (dispatch: any) => {
        try{
        const response = await feedAPi.feedById(id);
        dispatch(slice.actions.setFeedById(response));
        } catch(err) {
            console.error(err);
        }
    }
}

const getters = {
    users(rootState: any) {
    const state = rootState[name];
    return state.users;
    },
    feeds(rootState: any) {
    const state = rootState[name];
    return state.feeds;
   },
    feedById(rootState: any) {
    const state = rootState[name];
    return state.feedById;
   },
    isfeedsLoading(rootState: any) {
    const state = rootState[name];
    return state.isFeedsLoading;
   },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actions,
    getters,
    slice
}