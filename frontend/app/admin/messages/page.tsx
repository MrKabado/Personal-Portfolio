"use client";
import api from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Messages = {
  fname: string;
  lname: string;
  email: string;
  message: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Messages[]>([]);
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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await api.get("/api/admin/messages");

        setMessages(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getMessages();
  }, []);

  return (
    <div className="admin-default-div flex flex-col">
      <h1 className="font-medium text-lg mb-10">All messages</h1>

      <div className="border border-gray-400 rounded-md flex flex-col gap-3 h-96 overflow-y-auto p-3">
        {messages.length === 0 ? (
          <p className="text-gray-500 italic text-center mt-10">
            No messages yet.
          </p>
        ) : (
          messages.map((message, i) => (
            <div
              key={i}
              className="border-b border-gray-300 pb-2 last:border-b-0 hover:bg-gray-50 cursor-default"
            >
              <h2 className="font-medium text-lg text-black">
                {message.fname} {message.lname}
              </h2>
              <p className="text-gray-700 text-sm">{message.email}</p>
              <p className="text-black text-md mt-1">{message.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
