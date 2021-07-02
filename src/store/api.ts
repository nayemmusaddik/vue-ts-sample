import axios from "axios";
import {
  ArticlesResponse,
  Login,
  ProfileResponse,
  User,
  UserRequest,
  UserResponse,
} from "@/store/models";

export const Api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000 * 20,
});

export function setToken(jwt: string) {
  Api.defaults.headers.common["Authorization"] = "Token " + jwt;
}
export function clearToken() {
  Api.defaults.headers.common["Authorization"];
}

export async function login(user: Login): Promise<UserResponse> {
  const response = await Api.post("/users/login", { user });
  return response.data as UserResponse;
}
export async function fetchProfile(username: string): Promise<ProfileResponse> {
  const response = await Api.get("/profiles/" + username);
  return response.data as ProfileResponse;
}

export async function fetchUser(): Promise<UserResponse> {
  const response = await Api.get("/user");
  return response.data as UserResponse;
}

export async function updateUser(user: UserRequest): Promise<UserResponse> {
  const response = await Api.put("/user", { user });
  return response.data as UserResponse;
}
export async function fetchGlobalFeed() {
  const response = await Api.get("/articles");
  return response.data as ArticlesResponse;
}
