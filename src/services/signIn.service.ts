// Libs
import axios from "axios";

// Config
import { API } from "../config";

// Types
import { IFormLogin } from "../interfaces/forms.interface";

export const signIn = async (signInData: IFormLogin) => {
  const { data } = await axios.post(`${API}/login`, signInData);

  return data;
};
