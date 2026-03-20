"use client";
import Link from "next/link";
import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import api from "@/lib/api";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

type Props = {
  limit: boolean;
};

export default function RecentTaskHolder({ limit }: Props) {
  const context = useContext(DataContext);
  if (!context) return null;

  const { recentTasks } = context;

  let loading = "Loading...Please wait for a moment";
  if (recentTasks.length == undefined) {
    loading = "No recent tasks found. Start by creating your first project!";
  }

  // useEffect(() => {
  //   const getAllRecentTasks = async () => {
  //     try {
  //       const response = await api.get("/api/admin/recent-tasks");
  //       setRecentTasks(response.data.data);
  //     } catch (error: any) {
  //       console.log(error);
  //       return;
  //     }
  //   };

  //   getAllRecentTasks();
  // }, []);
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200">
          Recent Task
        </h1>

        <Link
          href={"/admin/recentTask"}
          className={`text-sm sm:text-base text-gray-600 font-medium hover:text-gray-800 dark:text-gray-300 ${
            limit ? "block" : "hidden"
          }`}
        >
          See All <ArrowRight className="inline w-4" />
        </Link>
      </div>

      {/* Tasks */}
      <div className="flex flex-col gap-3">
        {recentTasks.length === 0 ? (
          <p className="text-gray-500 italic text-center mt-10 text-sm sm:text-base">
            {loading}
          </p>
        ) : (
          (!limit
            ? [...recentTasks].reverse()
            : [...recentTasks].reverse().slice(0, 3)
          ).map((task) => (
            <div
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-4 
        bg-white border border-gray-200 rounded-lg shadow-sm 
        hover:shadow-md transition-all duration-200 cursor-pointer 
        border-l-4 border-l-gray-900 dark:bg-[#333333] dark:border-gray-600"
            >
              {/* Left Side */}
              <div className="flex flex-col">
                <h2 className="font-semibold text-gray-900 text-sm sm:text-base dark:text-gray-300">
                  {task.action_type}
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 mt-1 dark:text-gray-400">
                  {task.description}
                </p>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-400 sm:whitespace-nowrap">
                {new Date(task.created_at).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
