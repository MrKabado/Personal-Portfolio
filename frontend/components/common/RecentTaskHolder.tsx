"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import api from "@/lib/api";
import { ArrowRight } from "lucide-react";

type Props = {
  limit: boolean;
};

export default function RecentTaskHolder({ limit }: Props) {
  const [recentTasks, setRecentTasks] = useState<any[]>([]);

  useEffect(() => {
    const getAllRecentTasks = async () => {
      try {
        const response = await api.get("/api/admin/recent-tasks");
        setRecentTasks(response.data.data);
      } catch (error: any) {
        console.log(error);
        return;
      }
    };

    getAllRecentTasks();
  }, []);
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
          Recent Task Done
        </h1>

        <Link
          href={"/admin/recentTask"}
          className={`text-sm sm:text-base text-gray-600 font-medium hover:text-gray-800 ${
            limit ? "block" : "hidden"
          }`}
        >
          See All <ArrowRight className="inline w-4" />
        </Link>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-3">
        {(!limit ? recentTasks : recentTasks.slice(0, 3)).map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 
        bg-white border border-gray-200 rounded-lg shadow-sm 
        hover:shadow-md transition-all duration-200 cursor-pointer 
        border-l-4 border-l-gray-900"
          >
            {/* Left Side */}
            <div className="flex flex-col">
              <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
                {task.action_type}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {task.description}
              </p>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-400 sm:whitespace-nowrap">
              {new Date(task.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
