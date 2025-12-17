import { create } from "zustand";
import { authService } from "@/services/auth.service";
import { setAuthToken, clearAuthToken } from "@/lib/authCookies";

import type { AuthState } from "@/types/auth";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  hydrate: async () => {
    try {
      const user = await authService.me();
      set({ user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  login: async (formData) => {
    const res = await authService.login(formData);

    setAuthToken(res.token);
    set({ user: res.user });
  },

  logout: async () => {
    try {
      await authService.logout();
    } finally {
      clearAuthToken();
      set({ user: null });
    }
  },
}));
