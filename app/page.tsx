import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full">
      {/*main*/}
      <div className="flex flex-col gap-32 max-w-6xl mx-auto">
        {/*Parent 1*/}
        <div className="grid sm:grid-cols-2 place-items-center gap-10 w-full">
          {/*1*/}
          <Link href={"/sehirler"} className="relative w-full h-[260px] flex items-center justify-center">
            <Image src="/home/home-turkey-deprem.jpeg" alt="deprem" fill className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/60"></div>
            <h5 className="absolute text-white">TÜRKİYEDEKİ DEPREMLER</h5>
          </Link>
          {/*2*/}
          <div>
            <h4>Türkiye Deprem Tarihi</h4>
            <p className="font-roboto">
              Türkiye, aktif fay hatları üzerinde yer aldığı için sıkça deprem yaşayan bir ülkedir. Özellikle Kuzey
              Anadolu, Doğu Anadolu ve Batı Anadolu bölgeleri yüksek deprem riski taşır; bu durum, yapı güvenliği ve
              afet yönetimi konularını kritik hale getirmiştir.
            </p>
          </div>
        </div>
        {/*Parent 2*/}
        <div className="grid sm:grid-cols-2 place-items-center gap-10 w-full">
          {/*1*/}
          <div>
            <h4>Türkiye Deprem Tarihi</h4>
            <p className="font-roboto">
              Türkiye, aktif fay hatları üzerinde yer aldığı için sıkça deprem yaşayan bir ülkedir. Özellikle Kuzey
              Anadolu, Doğu Anadolu ve Batı Anadolu bölgeleri yüksek deprem riski taşır; bu durum, yapı güvenliği ve
              afet yönetimi konularını kritik hale getirmiştir.
            </p>
          </div>
          {/*2*/}
          <div className="relative w-full h-[260px] flex items-center justify-center overflow-hidden">
            <Image
              src="/home/home-turkey-deprem.jpeg"
              alt="deprem"
              fill
              className="object-cover hover:scale-105 duration-200 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <h5 className="absolute text-white">TÜRKİYEDEKİ DEPREMLER</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
