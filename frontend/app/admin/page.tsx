"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Code() {
  const router = useRouter();
  const [secretKey, setSecretKey] = useState("");

  useEffect(() => {
    const verifyAdmin = async () => {
      const response = await api.get('/api/verify-admin');

      if (response.data.authorized) {
        toast.success("Redirecting to admin dashboard...");
        router.push('/admin/dashboard')
      }
    }

    verifyAdmin();
  })

  const verifySecretKey = async (e: any) => {
    e.preventDefault();

    if (!secretKey || secretKey == null) {
      return toast.error("Please input the required fields.");
    }

    try {
      const response = await api.post('/api/admin/login', {secretKey});
      if (response.data.success) {
        toast.success(response.data.message);
        router.push('/admin/dashboard');
      }

    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message || "Login Error");
      console.log("Erorr in verifying secret key" + error);
      return;
    }

  }

  return (
    <div className="default-div h-screen flex justify-center items-center">
      <form onSubmit={verifySecretKey}
      className=" w-100 p-10 flex flex-col space-y-6 
      shadow-[0_0_2px_rgba(0,0,0,0.3)] rounded-lg hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]
      transition-all duration-200 cursor-default">
        <div className="text-center mb-10">
          <h1 className="font-bold text-2xl">Admin Login</h1>
          <p className="text-gray-600 text-sm">
            Enter Your Access Key to Proceed
          </p>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="secretKey" className="text-sm font-medium text-gray-800">
            Secret access key
          </label>
          <input
            type="password"
            id="secretKey"
            className="shadow-[0_0_2px_rgba(0,0,0,0.3)] p-2 rounded-md text-center"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>

        <button type="submit" className="border py-2 rounded-md bg-[#222222] hover:bg-[#333333] cursor-pointer transition duration-100 ease-in-out text-gray-200 font-medium">
          Submit
        </button>
      </form>
    </div>
  );
}
