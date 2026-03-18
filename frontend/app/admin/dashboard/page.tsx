"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import RecentTaskHolder from "@/components/common/RecentTaskHolder";
import AdminContainer from "@/components/common/AdminContainer";

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
        const response1 = await api.get("api/admin/messages");
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
    <AdminContainer>

      <h1 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-gray-300">
        Dashboard
      </h1>

      <div className="w-full my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-lg">
        {KeyStats.map((stats, i) => (
          <div
            key={i}
            className="w-full py-4 px-4 text-gray-300 flex flex-col items-center justify-center 
      bg-[#333333] rounded-lg hover:opacity-85 transition-all duration-200 cursor-default"
          >
            <h1 className="text-xl sm:text-2xl font-semibold">
              {stats.value || 0}
            </h1>
            <h1 className="text-sm sm:text-base font-medium text-center">
              {stats.name}
            </h1>
          </div>
        ))}
      </div>

      <RecentTaskHolder limit={true} />
    </AdminContainer>
  );
}
