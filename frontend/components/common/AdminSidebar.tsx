import { LayoutDashboard, Folder, MessageSquare, LogOut } from "lucide-react";

export default function AdminSidebar(props: {logoutBtnSideBar: () => void}) {
  const SidebarNav = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Projects", icon: Folder },
    { name: "Contacts/Messages", icon: MessageSquare },
  ];

  return (
    <div className="h-screen w-80 bg-white shadow-lg flex flex-col justify-between px-8 pt-25 pb-8 border">
      <div>
        {/* Admin Heading */}
        <div className="mb-8 flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-500">Welcome, Admin</p>
        </div>

        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-3">
          {SidebarNav.map(({ name, icon: Icon }, i) => (
            <button
              key={i}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 font-medium text-gray-700 cursor-pointer"
            >
              <Icon className="w-8" />
              {name}
            </button>
          ))}
        </div>
      </div>

      <button
        className="flex items-center gap-2 p-2 rounded-md hover:bg-red-100 font-medium cursor-pointer text-red-600"
        onClick={props.logoutBtnSideBar}
      >
        <LogOut className="w-8" />
          Logout
      </button>
    </div>
  );
}
