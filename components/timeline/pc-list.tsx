import { sehirler } from "@/data/sehir";
import PcItem from "@/components/timeline/pc-item";

export default function PcList() {
  const sortedSehirler = sehirler.sort((a, b) => a.id - b.id);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
      {sortedSehirler.map((sehir) => (
        <PcItem key={sehir.id} sehir={sehir} />
      ))}
    </div>
  );
}
