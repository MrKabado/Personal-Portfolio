"use client";
import { useState, useEffect } from "react";
import RecentTaskHolder from "@/components/common/RecentTaskHolder";
import AdminContainer from "@/components/common/AdminContainer";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function recentTask() {
  const router = useRouter();
  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await api.get("/api/verify-admin");
        if (response.data.authorized !== true) {
          toast.error(response.data.message);
          router.push("/admin");
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Unauthorized");
        console.log(error);
        router.push("/admin");
      }
    };

    verifyAdmin();
  }, []);
  return (
    <AdminContainer>
      <RecentTaskHolder limit={false} />
    </AdminContainer>
  );
}
