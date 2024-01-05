"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
// import { getHomePageVideos } from "./reducers/getHomePageVideos";
// import { getRecommendedVideos } from "./reducers/getRecommendedVideos";
// import { getSearchPageVideos } from "./reducers/getSearchPageVideos";
// import { getVideoDetails } from "./reducers/getVideoDetails";
const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
};
const YoutubeSlice = (0, toolkit_1.createSlice)({
    name: "youtubeApp",
    initialState,
    reducers: {
    // clearVideos: (state) => {
    //   state.videos = [];
    //   state.nextPageToken = null;
    // },
    // changeSearchTerm: (state, action: PayloadAction<string>) => {
    //   state.searchTerm = action.payload;
    // },
    // clearSearchTerm: (state) => {
    //   state.searchTerm = "";
    // },
    },
    extraReducers: (builder) => {
        // builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
        //   state.videos = action.payload.parsedData;
        //   state.nextPageToken = action.payload.nextPageToken;
        // });
        // builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
        //   state.videos = action.payload.parsedData;
        //   state.nextPageToken = action.payload.nextPageToken;
        // });
        // builder.addCase(getVideoDetails.fulfilled, (state, action) => {
        //   state.currentPlaying = action.payload;
        // });
        // builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
        //   state.recommendedVideos = action.payload.parsedData;
        // });
    },
});
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,
    },
});
