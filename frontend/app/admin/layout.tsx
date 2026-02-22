"use client";
import AdminHeader from "@/components/common/AdminHeader";
import AdminSidebar from "@/components/common/AdminSidebar";
import { usePathname } from "next/navigation";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin";
  const router = useRouter();

  const logoutBtnSideBar = async () => {
    try {
      const response = await api.post('/api/admin/logout');

      if (response.data.success) {
        toast.success("Logout successfully");
        router.push('/');
      }

    } catch (error) {
      toast.error("Error in logouting admin");
      console.log(error);
      return;
    }
  }

  return (
    <>
      {!isLoginPage && <AdminHeader />}
      <div className="flex">
        {!isLoginPage && <AdminSidebar logoutBtnSideBar={logoutBtnSideBar}/>}
        <main className={isLoginPage ? "w-full" : "pt-20 w-full"}>
          {children}
        </main>
      </div>
    </>
  );
}
