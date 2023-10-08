// Libs
import axios from "axios";

// Config
import { API } from "../config";

export const getPosts = async () => {
  const { data } = await axios.get(`${API}/post/public`);

  return data;
};
