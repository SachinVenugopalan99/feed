import { createAction, createSlice } from "@reduxjs/toolkit";
import feedAPi from "../../api/feed";
const GLOBAL_RESET = createAction('GLOBAL_RESET');

const name = 'feed';

const initialState={
    users: null,
    feeds: null,
    feedById: null,
    isFeedsLoading: false,
    scrollPosition: null,
    stopFecthing: false,
    feedData: [],
    feedCurrentPage: 1,
    feedIncludedPages: null
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
        },
        setScrollPosition(state, {payload}) {
            state.scrollPosition = payload;
        },
        setStopFetching(state, {payload}) {
            state.stopFecthing = payload;
        },
        setFeedData(state, {payload}) {
            state.feedData = payload
        },
        setFeedCurrentPage(state, {payload}) {
            state.feedCurrentPage = payload;
        },
        setFeedIncludedPages(state, {payload}) {
            state.feedIncludedPages = payload;
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
        dispatch(slice.actions.setUsers(response?.data));

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
        dispatch(slice.actions.setFeedById(response?.data));
        } catch(err) {
            console.error(err);
        }
    },
    scrollPosition: (value: any) => async (dispatch: any) => {
     try{
    dispatch(slice.actions.setScrollPosition(value));
     } catch(err) {
        console.error(err);
     }
    },
    stopFecthing: (value: any) => async(dispatch: any) => {
        try{
        dispatch(slice.actions.setStopFetching(value));
        } catch (err) {
            console.error(err)
        }
    },
    setFeedData: (value: any) => async(dispatch: any) => {
        try{
        dispatch(slice.actions.setFeedData(value));
        } catch (err) {
            console.error(err)
        }
    },
    setFeedCurrentPage: (value: any) => async(dispatch: any) => {
    try{
    dispatch(slice.actions.setFeedCurrentPage(value));
    } catch (err) {
        console.error(err)
    }
    },
    setFeedIncludedPages: (value: any) => async(dispatch: any) => {
    try{
    dispatch(slice.actions.setFeedIncludedPages(value));
    } catch (err) {
        console.error(err)
    }
    },
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
   scrollPosition(rootState: any) {
    const state = rootState[name];
    return state.scrollPosition;
   },
   stopFecthing(rootState: any) {
    const state = rootState[name];
    return state.stopFecthing;
   },
   feedData(rootState: any) {
    const state = rootState[name];
    return state.feedData;
   },
    feedCurrentPage(rootState: any) {
    const state = rootState[name];
    return state.feedCurrentPage;
   },
   feedIncludedPages(rootState: any) {
    const state = rootState[name];
    return state.feedIncludedPages;
   }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    actions,
    getters,
    slice
}