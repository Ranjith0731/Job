import axios from 'axios';

const API = 'http://localhost:8081/api/feeds';

export const getFeeds = async () => axios.get(API);
export const postFeed = async (feedData) => axios.post(API, feedData);
