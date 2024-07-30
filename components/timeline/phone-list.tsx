import { sehirler } from "@/data/sehir";
import PhoneItem from "@/components/timeline/phone-item";

export default function PhoneList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
      {sehirler.map((sehir) => (
        <PhoneItem key={sehir.id} sehir={sehir} />
      ))}
    </div>
  );
}
