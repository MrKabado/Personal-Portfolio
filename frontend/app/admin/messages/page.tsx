"use client";
import api from "@/lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AdminContainer from "@/components/common/AdminContainer";

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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await api.get("/api/admin/messages");
        setMessages(response.data.data);
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getMessages();
  }, []);

  return (
    <AdminContainer className="flex flex-col">
      <h1 className="font-medium text-base sm:text-lg mb-6 sm:mb-10">
        All messages
      </h1>

      <div
        className="border border-gray-300 rounded-md flex flex-col gap-3 
  h-[70vh] sm:h-96 overflow-y-auto p-3 sm:p-4"
      >
        {messages.length === 0 ? (
          <p className="text-gray-500 italic text-center mt-10 text-sm sm:text-base">
            No messages yet.
          </p>
        ) : (
          messages.map((message, i) => (
            <div
              key={i}
              className="border-b border-gray-200 pb-3 last:border-b-0 px-2
        hover:bg-gray-50 transition-all duration-150 cursor-default rounded-md
        dark:bg-[#333333] dark:border-gray-600"
            >
              <h2 className="font-medium text-base sm:text-lg text-black  dark:text-gray-200">
                {message.fname} {message.lname}
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm break-all  dark:text-gray-400">
                {message.email}
              </p>

              <p className="text-black text-sm sm:text-base mt-1 leading-relaxed  dark:text-gray-300">
                {message.message}
              </p>
            </div>
          ))
        )}
      </div>
    </AdminContainer>
  );
}
