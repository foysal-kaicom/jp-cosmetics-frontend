// user type 

export type Profile = {
  name: string;
  email: string;
  phone: string;
};

export type UpdateProfilePayload = {
  name: string;
  email: string;
  phone: string;
};

export type UpdatePasswordPayload = {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
};

// order type 

export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  product_attribute_id: number;
  quantity: number;
  unit_price: string;
  sub_total: string;
  coupon_id: number | null;
  discount_amount: string;
  payable: string;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: number;
  customer_id: number;
  order_number: string;
  sub_total_amount: string;
  delivery_charge: string;
  discount_amount: string;
  payable_total: string;
  payment_status: "pending" | "processing" | "cancel" | "failed" | "success" | "refunded";
  transaction_id: string | null;
  payment_method: string;
  payment_channel: string | null;
  additionals: string | null;
  status: "pending" | "confirm" | "dispatched" | "delivered" | "cancelled" | "returned" | "success";
  receiver_name: string;
  receiver_email: string;
  receiver_phone: string;
  shipping_city: string;
  shipping_area: string;
  shipping_location: string;
  customer_address_id: number;
  order_note: string | null;
  remarks: string | null;
  created_at: string;
  updated_at: string;
  details: OrderItem[];
};

export type OrderListResponse = {
  data: Order[];
};

export type OrderDetailResponse = {
  data: Order;
};


// address type 

export type Address = {
  id: number;  
  title: string;
  name:string;
  city: string;
  area: string;
  address: string;
  phone:string;
  status: 0 | 1;
  is_default: 0 | 1;
};

export type AddressPayload = {
  title: string;
  name:string;
  city: string;
  area: string;
  address: string;
  phone:string;
  is_default: 0 | 1;
  status:number
};

