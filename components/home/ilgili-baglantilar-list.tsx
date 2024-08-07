import { ilgiliBaglantilar } from "@/data/ilgili-baglantilar";
import IlgiliBaglantilarItem from "@/components/home/ilgili-baglantilar-item";

export default function IlgiliBaglantilarList() {
  return (
    <div>
      <h4 className="my-5">İlgili Bağlantılar</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {ilgiliBaglantilar.map((item) => (
          <IlgiliBaglantilarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
