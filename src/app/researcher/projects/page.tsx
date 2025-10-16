import { Plus } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Patterns",
      description: "Jaguar walking in jungle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blue_circle_icon.svg/1024px-Blue_circle_icon.svg.png",
      rules: 30,
      members: "",
      tag: "",
      notes: "",
    },
    {
      id: 2,
      name: "Nirvana",
      description: "Puma walking in jungle",
      logo: "",
      rules: 53,
      members: "",
      tag: "",
      notes: "",
    },
    {
      id: 3,
      name: "Switch",
      description: "",
      logo: "",
      rules: 65,
      members: "",
      tag: "",
      notes: "",
    },
    {
      id: 4,
      name: "Jaguar",
      description: "",
      logo: "",
      rules: 17,
      members: "",
      tag: "",
      notes: "",
    },
    {
      id: 5,
      name: "Puma",
      description: "",
      logo: "",
      rules: 20,
      members: "",
      tag: "",
      notes: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Header */}
      <div className="bg-[#4a5e4b] px-6 py-4 text-white text-xl font-light">
        Project Management
      </div>

      {/* Table Section */}
      <div className="p-4 md:p-8 overflow-x-auto">
        {/* Add Project Button */}
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 text-gray-700 text-sm border border-gray-300 px-3 py-2 rounded hover:bg-gray-50 transition-colors">
            <Plus size={16} />
            Add Project
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full border border-gray-200 text-sm rounded-md overflow-hidden">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left font-normal w-16">S/N</th>
              <th className="p-3 text-left font-normal">Name</th>
              <th className="p-3 text-left font-normal">Description</th>
              <th className="p-3 text-left font-normal">Logo</th>
              <th className="p-3 text-left font-normal">Data Visibility Rules</th>
              <th className="p-3 text-left font-normal">Member List</th>
              <th className="p-3 text-left font-normal">Tag</th>
              <th className="p-3 text-left font-normal">Notes</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr
                key={p.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3 text-gray-500">{p.description}</td>
                <td className="p-3">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt="logo"
                      className="h-6 w-6 object-contain rounded-full border"
                    />
                  ) : (
                    <div className="h-6 w-6 bg-gray-100 border rounded-full"></div>
                  )}
                </td>
                <td className="p-3">{p.rules}</td>
                <td className="p-3">{p.members}</td>
                <td className="p-3">{p.tag}</td>
                <td className="p-3">{p.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
