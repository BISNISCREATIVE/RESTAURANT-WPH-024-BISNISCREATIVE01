import axios from "./axios";

export async function login(email: string, password: string) {
  const { data } = await axios.post("/api/proxy/auth/login", { email, password });
  return data as { token: string };
}

export async function register(name: string, email: string, password: string) {
  const { data } = await axios.post("/api/proxy/auth/register", {
    name,
    email,
    password,
  });
  return data as { token: string };
}
