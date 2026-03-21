"use client";

import { createContext, useEffect, useState } from "react";
import api from "@/lib/api";

interface Project {
  id: number;
  title: string;
  description: string;
  web_link: string;
  techstacks: string[];
  image?: string;
  cover_image?: File;
}

interface Message {
  fname: string;
  lname: string;
  email: string;
  message: string;
}

interface DataContextType {
  projects: Project[];
  messages: Message[];
  recentTasks: any;
  loading: boolean;
  refreshData: () => void;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined,
);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [recentTasks, setRecentTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      // ALWAYS fetch public data
      const projectRes = await api.get("/api/projects");
      setProjects(projectRes.data.data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }

    try {
      // ONLY fetch admin if logged in
      const isAdmin = localStorage.getItem("isAdminLoggedIn");

      if (isAdmin) {
        const messageRes = await api.get("/api/admin/messages");
        const recentTaskRes = await api.get("/api/admin/recent-tasks");

        setMessages(messageRes.data.data);
        setRecentTasks(recentTaskRes.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch admin data", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ projects, messages, recentTasks, loading, refreshData: fetchData }}
    >
      {children}
    </DataContext.Provider>
  );
}