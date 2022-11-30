import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDgwYTQ2YzkwZTAyYTg5YTEzZGI3OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjU2NjU2NDMsImV4cCI6MTY2NTkyNDg0M30.-PfggngxV-KOdnvn4_lGqiVIUVY991tNTOuYLexHqVU";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
