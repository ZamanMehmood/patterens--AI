// import GalleryDetails from "./GalleryDetails";

// // ✅ Server function for static export
// export async function generateStaticParams() {
//   return Array.from({ length: 8 }).map((_, index) => ({
//     id: (index + 1).toString(),
//   }));
// }

// export default function Page({ params }: { params: { id: string } }) {
//   return <GalleryDetails id={params.id} />;
// }

 import GalleryDetails from "./GalleryDetails";

// ✅ Correct async return type for Next.js 15
export async function generateStaticParams() {
  const ids = Array.from({ length: 8 }).map((_, index) => ({
    id: (index + 1).toString(),
  }));

  return ids;
}

// ✅ PageProps type explicitly aligned with Next.js v15 expectations
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ Unwrap the promise
  return <GalleryDetails id={id} />;
}
