import MapSection from "../../../components/MapSection";
import ChartSection from "../../../components/ChartSection";
import TeamSection from "../../../components/TeamSection";


export default function ViewerPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="relative h-[300px] flex flex-col justify-center items-start text-white px-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Project Name</h1>
          <p className="text-sm opacity-90">
            Build an AI-powered wildlife tracking platform that allows researchers to upload large batches of camera-trap images.
          </p>
          <p className="text-xs mt-2 opacity-70">
            Goal: Over time, the platform can expand to support new features like acoustic recognition.
          </p>
        </div>
      </section>

      {/* Map and Chart */}
      <div className="grid md:grid-cols-2 gap-6 p-8 max-w-7xl mx-auto">
        <MapSection />
        <ChartSection />
      </div>

      {/* Team */}
      <TeamSection />
    </div>
  );
}
