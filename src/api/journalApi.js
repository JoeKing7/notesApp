import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-7d5dd-default-rtdb.firebaseio.com",
});

export default journalApi;
