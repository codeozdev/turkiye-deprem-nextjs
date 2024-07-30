import PhoneList from "@/components/timeline/phone-list";
import PcList from "@/components/timeline/pc-list";

export default function TimelineContainer() {
  return (
    <div>
      <div className="sm:hidden">
        <PhoneList />
      </div>
      <div className="hidden sm:block">
        <PcList />
      </div>
    </div>
  );
}
