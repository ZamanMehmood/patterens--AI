// "use client";

// import Image from "next/image";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function ProjectsPage() {
//   // Chart Data (matches your screenshot)
//   const months = [
//     "jan",
//     "feb",
//     "mar",
//     "apr",
//     "may",
//     "jun",
//     "jul",
//     "aug",
//     "sep",
//     "oct",
//     "nov",
//     "dec",
//   ];

//   const chartData = {
//     labels: months,
//     datasets: [
//       {
//         label: "Puma",
//         data: [20, 10, 60, 95, 55, 45, 35, 55, 50, 25, 40, 70],
//         backgroundColor: "#374151", // dark gray
//         borderRadius: 5,
//       },
//       {
//         label: "Jaguar",
//         data: [60, 85, 90, 100, 75, 95, 80, 90, 60, 30, 45, 65],
//         backgroundColor: "#D6C6AC", // tan
//         borderRadius: 5,
//       },
//       {
//         label: "Lion",
//         data: [40, 100, 20, 85, 45, 100, 75, 95, 40, 20, 35, 55],
//         backgroundColor: "#BFE5C2", // mint green
//         borderRadius: 5,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "bottom" as const, labels: { boxWidth: 12, color: "#333" } },
//     },
//     scales: {
//       x: { grid: { display: false }, ticks: { color: "#444" } },
//       y: {
//         beginAtZero: true,
//         grid: { color: "#eee" },
//         ticks: { stepSize: 20, color: "#444" },
//       },
//     },
//   };

//   const teamMembers = [
//     "David Parker",
//     "Anita Maxwin",
//     "Dexter Morgan",
//     "Bruce Banner",
//     "Tony Stark",
//     "Jessie Jones",
//     "Oliver Queen",
//     "Natasha Romanov",
//     "Ross Racheal",
//   ];

//   return (
//     <div className="flex flex-col w-full">
//       {/* ===== Hero Section ===== */}
//       <section
//         className="relative h-[300px] flex flex-col justify-center text-white px-6 sm:px-10 lg:px-20"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1950&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="bg-black/40 absolute inset-0"></div>
//         <div className="relative z-10 max-w-3xl">
//           <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Project Name</h1>
//           <p className="text-sm sm:text-base mb-2">
//             Build an AI-powered wildlife tracking platform that allows researchers to upload
//             large batches of camera-trap images.
//           </p>
//           <p className="text-xs sm:text-sm text-gray-200">
//             Goal: Over time, the platform can expand to support new features like acoustic
//             recognition.
//           </p>
//         </div>
//       </section>

//       {/* ===== Map + Chart Section ===== */}
//       <section className="flex flex-col lg:flex-row w-full">
//         {/* Map Section */}
//         <div className="lg:w-1/2 bg-[#4B6251] text-white">
//           <div className="px-6 py-3 font-medium">Map Sighting</div>
//           <div className="relative h-[400px] lg:h-[500px]">
//             <Image
//               src="/mapmaker.png"
//               alt="Map Screenshot"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="lg:w-1/2 bg-white border-t lg:border-t-0 lg:border-l border-gray-200">
//           <div className="px-6 py-3 text-gray-700 font-medium border-b border-gray-100">
//             Animal Sightings Bar Chart
//           </div>
//           <div className="p-6 h-[400px] lg:h-[500px]">
//             <Bar data={chartData} options={chartOptions} />
//           </div>
//         </div>
//       </section>

//       {/* ===== Team Section ===== */}
//       <section className="bg-gray-50 py-10 px-6 sm:px-10 lg:px-20">
//         <h2 className="text-lg font-medium text-gray-700 mb-6">Team</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
//           {teamMembers.map((member, i) => (
//             <div key={i} className="flex flex-col items-center">
//               <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
//                 <Image
//                   src={`https://randomuser.me/api/portraits/${
//                     i % 2 === 0 ? "men" : "women"
//                   }/${i + 10}.jpg`}
//                   alt={member}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-sm text-gray-700 font-medium">{member}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProjectsPage() {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Puma",
        data: [20, 10, 60, 95, 55, 45, 35, 55, 50, 25, 40, 70],
        backgroundColor: "#374151",
        borderRadius: 5,
      },
      {
        label: "Jaguar",
        data: [60, 85, 90, 100, 75, 95, 80, 90, 60, 30, 45, 65],
        backgroundColor: "#D6C6AC",
        borderRadius: 5,
      },
      {
        label: "Lion",
        data: [40, 100, 20, 85, 45, 100, 75, 95, 40, 20, 35, 55],
        backgroundColor: "#BFE5C2",
        borderRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const, labels: { boxWidth: 12, color: "#333" } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#444" } },
      y: {
        beginAtZero: true,
        grid: { color: "#eee" },
        ticks: { stepSize: 20, color: "#444" },
      },
    },
  };

  const teamMembers = [
    "David Parker",
    "Anita Maxwin",
    "Dexter Morgan",
    "Bruce Banner",
    "Tony Stark",
    "Jessie Jones",
    
  ];

  return (
    <div className="flex flex-col w-full">
      {/* ===== Hero Section ===== */}
 
      <section
  className="relative h-[400px] flex flex-col justify-center text-white px-6 sm:px-10 lg:px-20"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Subtle overlay for contrast */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div
    className="
      relative z-10 max-w-3xl
      text-center sm:text-left
      pt-8 sm:pt-0
      mx-auto sm:mx-0
    "
  >
    <h1 className="text-3xl sm:text-5xl font-semibold mb-3 text-gray-50">
      Project Name
    </h1>

    <p className="text-sm sm:text-base mb-2 text-gray-200">
      Build an AI-powered wildlife tracking platform that allows researchers to upload
      large batches of camera-trap images.
    </p>

    <p className="text-xs sm:text-sm text-gray-300">
      Goal: Over time, the platform can expand to support new features like acoustic
      recognition.
    </p>
  </div>
</section>


      {/* ===== Map + Chart + Team Section ===== */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Map Section */}
        <div className="lg:w-1/2 bg-[#4B6251] text-white">
          <div className="px-6 py-3 font-medium">Map Sighting</div>
          <div className="relative h-[450px] lg:h-[550px]">
            <Image
              src="/mapmaker.png"
              alt="Map Screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Chart + Team */}
        <div className="lg:w-1/2 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col">
          {/* Chart */}
          <div className="px-6 py-3 text-gray-700 font-medium border-b border-gray-100">
            Animal Sightings Bar Chart
          </div>
          <div className="p-4 h-[300px] sm:h-[350px] lg:h-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Team */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <h2 className="text-base font-medium text-gray-700 mb-4">Team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mb-2">
                    <Image
                      src={`https://randomuser.me/api/portraits/${
                        i % 2 === 0 ? "men" : "women"
                      }/${i + 10}.jpg`}
                      alt={member}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
