import apiClient from "@/lib/axios";
import type {
  LoginPayload,
  LoginResponse,
  User,
} from "@/types/auth";

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await apiClient.post<LoginResponse>(
      "/login",
      payload
    );
    return data;
  },

  async me(): Promise<User> {
    const { data } = await apiClient.get<User>("/me");
    return data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/logout");
  },
};
