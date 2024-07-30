import Image from "next/image";
import { SehirTypes } from "@/data/sehir";
import Link from "next/link";

export default function PhoneItem({ sehir }: { sehir: SehirTypes }) {
  return (
    <Link href={`/sehir/${sehir.id}`}>
      <div className="w-full h-36 shadow rounded text-center relative hover:scale-105 duration-200 ease-in-out text-white">
        <Image
          src={sehir.image}
          alt="hakkari"
          fill
          className="object-cover"
          sizes="100vw"
          priority={true}
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 w-full flex items-center justify-center font-semibold">
          {sehir.name}
        </div>
        <div className="absolute flex justify-between w-full">
          <span className="text-sm shadow-lg">{sehir.year}</span>
          <div className="bg-red-500 px-1">{sehir.deprem}</div>
        </div>
      </div>
    </Link>
  );
}
