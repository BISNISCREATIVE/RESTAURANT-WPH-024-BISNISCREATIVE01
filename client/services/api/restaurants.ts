import axios from "./axios";

export async function createRestaurant(payload: any) {
  const { data } = await axios.post("/api/proxy/resto", payload);
  return data;
}

export async function updateRestaurant(id: string | number, payload: any) {
  const { data } = await axios.put(`/api/proxy/resto/${id}`, payload);
  return data;
}

export async function deleteRestaurant(id: string | number) {
  const { data } = await axios.delete(`/api/proxy/resto/${id}`);
  return data;
}
