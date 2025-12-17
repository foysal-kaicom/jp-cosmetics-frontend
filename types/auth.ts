export type User = {
  id: number;
  name?: string;
  email: string;
  phone?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type AuthState = {
  user: User | null;
  loading: boolean;

  hydrate: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};
