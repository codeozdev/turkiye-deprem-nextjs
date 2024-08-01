"use client";

import { sehirler, SehirTypes } from "@/data/sehir";
import Vefat from "@/components/deprem-data/vefat";
import { wiki, WikiProps } from "@/data/wiki";
import Image from "next/image";
import Bina from "@/components/deprem-data/bina";

export default function SehirPage({ params }: any) {
  const sehir = sehirler.find((sehir) => sehir.id.toString() === params.id) as SehirTypes;
  const depremData = wiki.find((item) => item.id.toString() === params.id) as WikiProps;

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 place-content-center sm:h-[calc(100vh-56px)]">
        <div className="gap-4 flex flex-col justify-between relative ">
          <Image
            src={depremData.image}
            alt={depremData.image}
            width={400}
            height={400}
            className="object-cover rounded-lg w-[690px] h-[387px]"
            quality={100}
            priority
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <Image
            src={depremData.image2}
            alt={depremData.image2}
            width={400}
            height={400}
            className="object-cover rounded-lg w-[690px] h-[387px]"
            quality={100}
            priority
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="absolute -top-4 -left-4 px-3 font-semibold text-white bg-red-500">{sehir.name}</div>
          <div
            className={`absolute top-0 right-0 rounded-full translate-x-5 -translate-y-4 p-2 w-[50px] h-[50px] text-center text-white border-4 border-white dark:border-black  bg-red-500`}
          >
            {sehir.deprem.toFixed(1)}
          </div>
          <div className="absolute top-3 -left-4 px-3 font-semibold bg-red-500 text-white">{sehir.year}</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="w-full border rounded-lg p-4 h-[387px] overflow-y-scroll">
            <div className="space-y-2 mb-4">
              <div className="text-sm text-neutral-500 dark:text-neutral-300 font-bold">
                Hükümet: {depremData.hukumet}
              </div>
              <div className="font-bold">{depremData.basbakan}</div>
            </div>
            <div>
              <p className="dark:text-neutral-500 text-sm mr-4">{depremData.wiki}</p>
            </div>
          </div>
          <div className="col-span-1 overflow-hidden relative object-cover object-top w-full h-[387px] self-start border rounded-lg">
            <Image src={depremData.gazete} alt="gazete" fill />
          </div>
          <Vefat sehir={sehir} depremData={depremData} />
          <Bina sehir={sehir} depremData={depremData} />
        </div>
      </div>
    </div>
  );
}
