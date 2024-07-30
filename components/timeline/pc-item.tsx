import { SehirTypes } from "@/data/sehir";
import Image from "next/image";
import Link from "next/link";

export default function PcItem({ sehir }: { sehir: SehirTypes }) {
  return (
    <div className="border-s border-neutral-300 dark:border-neutral-500">
      <Link href={`/sehir/${sehir.id}`}>
        <div className="flex-start flex items-center pt-7">
          <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
          <p className="text-sm text-neutral-500 dark:text-neutral-300">
            {sehir.year}
          </p>
        </div>
        <div className="mb-2 ms-4 mt-1 hover:scale-105 duration-200 ease-in-out">
          <h4 className="mb-1.5 sm:text-sm md:text-xl font-semibold">
            {sehir.name}
          </h4>

          <div className="relative inline-block">
            <Image
              src={sehir.image}
              alt="van"
              width={300}
              height={200}
              priority={true}
              quality={100}
              className="object-cover h-[120px]"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-0 left-0 bg-red-600 w-full font-semibold text-sm text-center">
              {sehir.deprem.toFixed(1)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
