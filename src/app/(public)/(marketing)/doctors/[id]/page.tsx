import { doctorsData } from "@/data/doctors-data";
import DoctorDetailClient from "./DoctorDetailClient";

export function generateStaticParams() {
  return doctorsData.map((doc) => ({
    id: doc.id,
  }));
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DoctorDetailClient doctorId={id} />;
}
