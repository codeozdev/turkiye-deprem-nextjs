"use client";

import { sehirler, SehirlerPros } from "@/data/sehir";
import { turkiyeDepremTarihi, TurkiyeDepremTarihiProps } from "@/data/turkiye-deprem-tarihi";
import Image from "next/image";
import PieHayatiniKaybeden from "@/components/deprem-grafik/pie-hayatini-kaybeden";
import PieYikilanBina from "@/components/deprem-grafik/pie-yikilan-bina";

export default function SehirlerIdPage({ params }: any) {
  const sehir = sehirler.find((sehir) => sehir.id.toString() === params.id) as SehirlerPros;
  const depremData = turkiyeDepremTarihi.find((item) => item.id.toString() === params.id) as TurkiyeDepremTarihiProps;

  return (
    <div className="w-full grid sm:grid-cols-2 gap-5 3xl:gap-7 place-content-center h-full">
      {/*1 COLUM*/}
      <div className="relative">
        <div className="overflow-hidden flex flex-col justify-between gap-5 3xl:gap-7">
          <Image
            src={depremData.image}
            alt="img"
            width={400}
            height={400}
            className="object-cover rounded-lg w-full sm:h-[290px] 3xl:h-[360px] hover:scale-105 duration-200 ease-in-out"
            quality={100}
            priority
          />
          <Image
            src={depremData.image2}
            alt="img"
            width={400}
            height={400}
            className="object-cover rounded-lg w-full sm:h-[290px] 3xl:h-[360px] hover:scale-105 duration-200 ease-in-out"
            quality={100}
            priority
          />
        </div>
        <div className="absolute -top-4 -left-4 px-3 font-semibold text-white bg-red-500 z-10">{depremData.name}</div>
        <div
          className={`absolute top-0 right-0 rounded-full translate-x-5 -translate-y-4 p-2 w-[50px] h-[50px] text-center text-white border-4 border-white dark:border-black  bg-red-500`}
        >
          {sehir.deprem.toFixed(1)}
        </div>
        <div className="absolute top-3 -left-4 px-3 font-semibold bg-red-500 text-white">{sehir.year}</div>
      </div>

      {/*2 COLUM/GRID*/}
      <div className="grid grid-cols-2 gap-2 3xl:gap-4">
        {/*1 COLUM*/}
        <div className="border rounded-lg p-4 h-[600px] 3xl:h-[748px] overflow-y-auto">
          <div className="space-y-2 mb-4">
            <h6>Hükümet: {depremData.hukumet}</h6>
            <h5>{depremData.basbakan}</h5>
          </div>
          <div>
            <p>{depremData.wiki}</p>
          </div>
        </div>

        <div className="relative w-full border rounded-lg">
          <Image
            src={depremData.gazete}
            alt="gazete"
            fill
            className="object-fill rounded-lg"
            quality={100}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute -top-4 -right-4 px-3 font-semibold text-white bg-red-500 z-10">Dönemin Gazetesi</div>
        </div>
      </div>

      <PieHayatiniKaybeden depremData={depremData} />
      <PieYikilanBina depremData={depremData} />
    </div>
  );
}
