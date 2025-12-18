import apiClient from "@/lib/axios";
import type {
  OrderListResponse,
  OrderDetailResponse,
  Address,
  AddressPayload,
  Profile,
  UpdateProfilePayload,
  UpdatePasswordPayload,
} from "@/types/user";


export const profileService = {
  async view(): Promise<Profile> {
    const res = await apiClient.get("/customer/profile");
    return res.data.data;
  },

  async updateProfile(payload: UpdateProfilePayload) {
    const res = await apiClient.post("/customer/update-profile", payload);
    return res.data.data;
  },

  async updatePassword(payload: UpdatePasswordPayload) {
    const res = await apiClient.post("/customer/change-password", payload);
    return res.data;
  },
};


export const orderService = {
  async list() {
    const res = await apiClient.get<OrderListResponse>("/customer/orders-list");
    return res.data.data;
  },

  async detail(orderId: number) {
    const res = await apiClient.get<OrderDetailResponse>(
      `/customer/order-details/${orderId}`
    );
    return res.data.data;
  },
};


export const addressService = {
  async list(): Promise<Address[]> {
    const res = await apiClient.get("/customer/addresses");
    return res.data.data;
  },

  async create(payload: AddressPayload): Promise<Address> {
    const res = await apiClient.post("/customer/add-address", payload);
    return res.data.data;
  },

  async update(id: number, payload: AddressPayload): Promise<Address> {
    const res = await apiClient.post(`/customer/update-address/${id}`, payload);
    return res.data.data;
  },

  async remove(id: number): Promise<void> {
    await apiClient.delete(`/customer/update-address/${id}`);
  },

  async setDefault(id: number): Promise<void> {
    await apiClient.post(`/customer/addresses/${id}/default`);
  },
};
