"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { verifyAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecentTaskHolder from "@/components/common/RecentTaskHolder";

export default function DashboardPage() {
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

  const [recentTasks, setRecentTasks] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const countProjects = async () => {
      try {
        const response1 = await api.get('api/admin/messages');
        setMessages(response1.data.data);

        const response2 = await api.get("/api/projects");
        setProjects(response2.data.data);
      } catch (error: any) {
        console.log(error);
        return;
      }
    };

    countProjects();
  }, []);

  const KeyStats = [
    { name: "Total Projects", value: projects.length },
    { name: "Total Messages", value: messages.length },
  ];

  return (
    <div className="admin-default-div">
      <h1 className="font-semibold text-2xl text-gray-800">Dashboard</h1>

      <div className="w-fit h-20 my-5 grid grid-cols-3 gap-10">
        {KeyStats.map((stats, i) => (
          <div
            key={i}
            className="w-40 py-2 px-4 text-gray-300 flex flex-col items-center justify-between 
          bg-[#333333] rounded-lg hover:opacity-85 transition-all duration-200 cursor-default"
          >
            <h1 className="text-2xl font-semibold">{stats.value || 0}</h1>
            <h1 className="font-medium">{stats.name}</h1>
          </div>
        ))}
      </div>

      <RecentTaskHolder 
        limit={true}
      />
    </div>
  );
}
