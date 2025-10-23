import GalleryDetails from "./GalleryDetails";

// ✅ Server function for static export
export async function generateStaticParams() {
  return Array.from({ length: 8 }).map((_, index) => ({
    id: (index + 1).toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <GalleryDetails id={params.id} />;
}
