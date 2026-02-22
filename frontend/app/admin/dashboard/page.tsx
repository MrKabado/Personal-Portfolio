"use client";
import { useEffect, useState } from "react"
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { verifyAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import api from "@/lib/api";


export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await api.get('/api/verify-admin');
        if (response.data.authorized !== true) {
          toast.error(response.data.message);
          router.push('/admin');
        }

      } catch (error:any) {
        toast.error(error.response?.data?.message || "Unauthorized");
        console.log(error);
        router.push('/admin');
      }
    }

    verifyAdmin();
  }, []);

  const [recentTasks, setRecentTasks] = useState<any[]>([])

  useEffect(() => {
    const getAllRecentTasks = async () => {
      try {
        const response = await api.get('/api/admin/recent-tasks');
        setRecentTasks(response.data.data);
        console.log(response.data.data);
      } catch (error: any) {
        console.log(error);
        return;
      }
    }

    getAllRecentTasks();
  },[]);


  const KeyStats = [

    {name: "Total Projects", value: 5},
    {name: "Messages", value: recentTasks.length},
    {name: "New Messages", value: 2},
  ]

  const recentTasksDo = [
    {name: "Added new project", date: "Feb. 21, 2026"},
    {name: "Receive new message", date: "Feb. 18, 2026"}
  ]

  return (
    <div className="admin-default-div">
      <h1 className="font-semibold text-2xl text-gray-800">Dashboard</h1>

      <div className="w-fit h-20 my-5 grid grid-cols-3 gap-10">
        {KeyStats.map((stats, i) => ( 
          <div key={i} className="w-40 py-2 px-4 text-gray-300 flex flex-col items-center justify-between 
          bg-[#333333] rounded-lg hover:opacity-85 transition-all duration-200 cursor-default">
            <h1 className="text-2xl font-semibold">{stats.value}</h1>
            <h1 className="font-medium">{stats.name}</h1>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="font-semibold text-xl mb-4">Recent Task Done</h1>

        <div className="flex flex-col gap-2">
          {
            recentTasks.map((task) => (
              <div key={task.id} className="flex justify-between py-1 px-3 shadow-sm rounded-md 
                bg-gray-100 cursor-default transform hover:scale-103 transition-all duration-200 border-transparent
                  hover:border-red-500 border-l-4">
                <h1 className="font-medium">{task.action_type}</h1>
                <p>{task.description}</p>
                <p>{new Date(task.created_at).toLocaleDateString()}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}