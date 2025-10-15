 import { Filter } from "lucide-react";

export default function AuditLogsPage() {
  const logs = [
    { time: "00:27", user: "David Johnson", action: "Input", target: "Input", ip: "Input" },
    { time: "10:27", user: "Tony Stark", action: "Input", target: "Input", ip: "Input" },
    { time: "24:26", user: "Anita Manwin", action: "Input", target: "Input", ip: "Input" },
    { time: "15:57", user: "Peter Parker", action: "Input", target: "Input", ip: "Input" },
    { time: "18:47", user: "Ezenwa Chidinma", action: "Input", target: "Input", ip: "Input" },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Audit Logs</h1>

      <div className="max-w-6xl border border-gray-200 rounded-md overflow-hidden">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 font-medium">Timestamp</th>
              <th className="py-3 px-4 font-medium">User</th>
              <th className="py-3 px-4 font-medium">Action</th>
              <th className="py-3 px-4 font-medium">Target</th>
              <th className="py-3 px-4 font-medium flex items-center justify-between">
                IP Address
                <button className="flex items-center gap-1 bg-[#485C4F] text-white text-xs px-3 py-1 rounded-sm hover:bg-[#3b4c42] transition">
                  <Filter size={14} />
                  Filter
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-5 px-4">{log.time}</td>
                <td className="py-5 px-4">{log.user}</td>
                <td className="py-5 px-4">{log.action}</td>
                <td className="py-5 px-4">{log.target}</td>
                <td className="py-5 px-4">{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
