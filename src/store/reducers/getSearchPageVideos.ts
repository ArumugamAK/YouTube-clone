import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../index1";
// import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseIsolatedEntityName } from "typescript";
// import  parseData  from "../../utils";
import { HomePageVideos } from "../../Type";
// import { RootState } from "..";
// import { RecommendedVideos } from "../../Types";
// import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils/index2";

const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;
console.log("1");
export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/searchPageVidoes",
  async (isNext: boolean, { getState }) => {
    try {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos,searchTerm },
      } = getState() as RootState;

      const response = await axios.get(
        `${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""
        }`
        // `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        //   isNext ? `pageToken=${nextPageTokenFromState}` : ""
        // }`
      );

      const { items, nextPageToken } = response.data;
    //   console.log(items);

      const parsedData: HomePageVideos[] = await parseData(items);

      return { parsedData: [...videos, ...parsedData], nextPageToken };
    } catch (error) {
      console.error("Error in getHomePageVideos:", error);
      throw error;
    }
  }
);
// import {
//   createSlice,
//   configureStore,
//   createAsyncThunk,
//   PayloadAction,
// } from "@reduxjs/toolkit";
// import axios from "axios";

// import { InitialState, HomePageVideos } from "../../Type";
// import { parseData } from "../../utils/index2";
// import { RootState } from "../index1";

// const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;
// const YOUTUBE_API_URL = "YOUR_YOUTUBE_API_URL"; // Replace with your actual API URL

// export const getHomePageVideos = createAsyncThunk(
//   "youtubeApp/homePageVidoes",
//   async (_, { getState, dispatch }) => {
//     try {
//       const {
//         youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
//       } = getState() as RootState;

//       // Check if data is in localStorage
//       const storedData = JSON.parse(localStorage.getItem("videosData") || "null");

//       if (storedData) {
//         // If data is found, dispatch the action with stored data
//         dispatch({
//           type: "youtubeApp/homePageVidoes/fulfilled",
//           payload: storedData,
//         });
//       } else {
//         // Fetch data from API as usual
//         const response = await axios.get(
//           `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`
//         );

//         const { items, nextPageToken } = response.data;
//         console.log(items);

//         const parsedData: HomePageVideos[] = await parseData(items);

//         // Update localStorage with new data
//         localStorage.setItem(
//           "videosData",
//           JSON.stringify({ parsedData, nextPageToken })
//         );

//         // Return data as usual
//         return { parsedData: [...videos, ...parsedData], nextPageToken };
//       }
//     } catch (error) {
//       console.error("Error in getHomePageVideos:", error);
//       throw error;
//     }
//   }
// );

