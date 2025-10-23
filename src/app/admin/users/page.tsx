import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, email: "davidjohnson@gmail.com", role: "Admin", status: "Active", twoFA: true },
    { id: 2, email: "davidjohnson@gmail.com", role: "User", status: "Inactive", twoFA: false },
    { id: 3, email: "davidjohnson@gmail.com", role: "Admin", status: "Active", twoFA: true },
    { id: 4, email: "davidjohnson@gmail.com", role: "User", status: "Active", twoFA: false },
    { id: 5, email: "davidjohnson@gmail.com", role: "Admin", status: "Active", twoFA: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-light text-gray-800">User Management</h1>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm">
          <Plus size={18} /> Invite Users
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-sm text-gray-700 border-separate border-spacing-y-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 font-medium">User</th>
              <th className="py-3 px-6 font-medium">Email</th>
              <th className="py-3 px-6 font-medium">Role</th>
              <th className="py-3 px-6 font-medium">Status</th>
              <th className="py-3 px-6 font-medium">2FA</th>
              <th className="py-3 px-6 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white hover:shadow-sm transition-all border-b border-gray-200"
              >
                <td className="py-3 px-6">{user.id}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">{user.status}</td>
                <td className="py-3 px-6">
                  {user.twoFA ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-50 text-green-600">
                      ✔
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-50 text-gray-400">
                      ⭕
                    </span>
                  )}
                </td>
                <td className="py-3 px-6 flex justify-center gap-3">
                  <button className="text-gray-600 hover:text-blue-600">
                    <Pencil size={18} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
