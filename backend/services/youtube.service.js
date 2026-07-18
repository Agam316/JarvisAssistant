import axios from "axios";

export const searchYoutubeVideo = async (query) => {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    const url = "https://www.googleapis.com/youtube/v3/search";

    const response = await axios.get(url, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 1,
        key: apiKey,
      },
    });

    return response.data.items[0].id.videoId;
  } catch (error) {
    console.log(error.response?.data || error.message);
    return null;
  }
};