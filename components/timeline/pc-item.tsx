import { SehirlerPros } from "@/data/sehir";
import Image from "next/image";
import Link from "next/link";

export default function PcItem({ sehir }: { sehir: SehirlerPros }) {
  return (
    <div className="border-s border-neutral-300 dark:border-neutral-500">
      <Link href={`/sehirler/${sehir.id}`}>
        <div className="flex-start flex items-center pt-7">
          <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
          <p className="text-sm dark:text-neutral-300">{sehir.year}</p>
        </div>
        <div className="mb-2 ms-4 w-full">
          <h4 className="mb-1">{sehir.name}</h4>

          <div className="relative group rounded-lg w-[250px] h-[120px] 3xl:h-[140px] 3xl:w-[280px] ">
            <Image
              src={sehir.thumbnail}
              alt="van"
              fill
              priority={true}
              quality={100}
              className="dark:opacity-50 group-hover:scale-105 group-hover:opacity-100 duration-200 ease-in-out rounded-tr-2xl rounded-lg  object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />

            <div
              className={`absolute top-0 right-0 rounded-full translate-x-4 -translate-y-3 p-2 w-[50px] h-[50px] text-center text-white border-4 border-white dark:border-black bg-red-500`}
            >
              {sehir.deprem.toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
