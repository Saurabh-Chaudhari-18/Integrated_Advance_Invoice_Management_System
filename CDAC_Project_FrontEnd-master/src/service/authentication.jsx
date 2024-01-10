import axios from "axios";
import { backendUrl } from "../config/urls";

async function AuthenticateUser(username, pass) {
  console.log(username, pass, "asdasdasdas=====>");
  const user = await axios.post(`${backendUrl}/Authenticate`, {
    username: username,
    password: pass,
  });
  const data = user.data;
  return data;
}

export async function CreateAdminUser(adminObj) {
  console.log("admin obj======>", adminObj);
  const response = await axios.post(`${backendUrl}/admins`, adminObj);
  console.log('==========>',response);
  const admin =response.data;
  return admin;
}

export default AuthenticateUser;
