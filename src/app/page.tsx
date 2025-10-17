import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
   <h2>Hello SIR!</h2>
      <p>Patterens is in Progres!</p>

      <div className="flex gap-4">

         <Link
          href="/viewer/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Viwer Portal
        </Link>
         <Link
          href="/contributor/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Contributor Portal
        </Link>
        <Link
          href="/researcher/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Researcher Portal
        </Link>

        <Link
          href="/admin/dashboard"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Admin Portal
        </Link>
      </div>
    </div>
  );
}
