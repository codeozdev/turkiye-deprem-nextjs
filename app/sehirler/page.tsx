"use client";

import TurkiyedekiEnbuyukDepremler from "@/components/deprem-grafik/turkiyedeki-enbuyuk-depremler";
import TurkiyedekiEnbuyukCankayiplari from "@/components/deprem-grafik/turkiyedeki-enbuyuk-cankayiplari";
import TimelineContainer from "@/components/timeline/timeline-container";

export default function SehirlerPage() {
  return (
    <div className="flex flex-col gap-10 sm:gap-32">
      <div className="grid sm:grid-cols-2 sm:gap-4 w-full px-2 gap-4">
        <TurkiyedekiEnbuyukDepremler />
        <TurkiyedekiEnbuyukCankayiplari />
      </div>
      <TimelineContainer />
    </div>
  );
}
