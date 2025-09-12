import * as React from "react";
import { useForm } from "react-hook-form";
import api from "@/services/api/axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store";
import { setAuth } from "@/features/auth/authSlice";

type Form = { email: string; password: string; remember?: boolean };

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<Form>();
  const { errors, isSubmitting } = formState as any;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: Form) => {
    try {
      const res = await api.post("/api/proxy/auth/login", {
        email: values.email,
        password: values.password,
      });
      if (res?.data?.success) {
        const token = res.data.data?.token;
        const user = res.data.data?.user;
        if (token && user) {
          dispatch(setAuth({ token, user }));
          navigate("/");
          return;
        }
      }
      alert("Login failed: Invalid credentials or unexpected response");
    } catch (err: any) {
      console.warn(err?.response ?? err?.message ?? err);
      alert("Login failed: server not reachable or invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden relative">
        <div className="hidden md:block relative">
          <img
            src={
              "https://cdn.builder.io/api/v1/image/assets%2F54858901b0c442e6a38e6cc906052164%2F96f8604f81ff4cc5b6792324ef5f74fe?format=webp&width=1200"
            }
            alt="hero"
            className="w-full h-full object-cover min-h-screen"
          />
        </div>
        <div className="py-12 px-8 bg-white relative z-30">
          <div className="max-w-md mx-auto w-full sm:w-[420px]">
            <div className="flex items-center gap-3 mb-6">
              <img src="/placeholder.svg" alt="logo" className="w-8 h-8" />
              <div className="text-2xl font-extrabold">Foody</div>
            </div>
            <h2 className="text-3xl font-extrabold mb-1">Welcome Back</h2>
            <p className="text-sm text-slate-600 mb-6">Good to see you again! Let’s eat</p>

            <div className="mb-6">
              <div className="relative bg-slate-100 rounded-full p-1 w-full max-w-[320px]">
                <div className="flex">
                  <button className="flex-1 rounded-full bg-white shadow-sm py-2">Sign in</button>
                  <button onClick={() => navigate('/register')} className="flex-1 rounded-full py-2">Sign up</button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="w-full rounded-lg border p-3 border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                {errors?.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                  className="w-full rounded-lg border p-3 border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                {errors?.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
              </div>

              <div className="flex items-center gap-2">
                <input id="remember" type="checkbox" {...register("remember")} />
                <label htmlFor="remember">Remember Me</label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-red-600 text-white py-3 font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Signing in…" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
