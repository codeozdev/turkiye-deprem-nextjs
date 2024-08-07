import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import IlgiliBaglantilarList from "@/components/home/ilgili-baglantilar-list";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      {/*Row 1*/}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 w-full">
        {/*1*/}
        <div className="relative w-full h-[260px] flex items-center justify-center overflow-hidden">
          <Image
            src="/home/turkiye.webp"
            alt="deprem"
            fill
            className="object-cover hover:scale-105 duration-200 ease-in-out"
          />
        </div>
        {/*2*/}
        <div>
          <h4>Türkiye Deprem Tarihi</h4>
          <p>
            Türkiye, aktif fay hatları üzerinde yer aldığı için sıkça deprem yaşayan bir ülkedir. Özellikle Kuzey
            Anadolu, Doğu Anadolu ve Batı Anadolu bölgeleri yüksek deprem riski taşır; bu durum, yapı güvenliği ve afet
            yönetimi konularını kritik hale getirmiştir.
          </p>
          <Button asChild variant="outline" className="mt-5">
            <Link href={`/sehirler`}>{`Türkiye'de olmuş en büyük depremler`}</Link>
          </Button>
        </div>
      </div>
      {/*Row 2*/}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 w-full">
        {/*1*/}
        <div>
          <h4>Beklenen İstanbul Depremi</h4>
          <p>
            <span className="text-red-500 font-bold">Uzmanlar</span>
            {`, İstanbul'da beklenen büyük depremle ilgili ciddi uyarılarda bulunuyor. Kentin belirli
              bölgelerinde büyük can ve mal kaybı riski taşıyan bu deprem, hazırlıklı olunması gereken önemli bir doğal
              afet olarak öne çıkıyor.`}
          </p>
          <Button asChild variant="outline" className="mt-5">
            <Link href="/istanbul">Uzmanlar ne diyor? </Link>
          </Button>
        </div>
        {/*2*/}
        <div className="relative w-full h-[260px] flex items-center justify-center overflow-hidden">
          <Image
            src="/home/istanbul.webp"
            alt="deprem"
            fill
            className="object-cover hover:scale-105 duration-200 ease-in-out"
          />
        </div>
      </div>
      <IlgiliBaglantilarList />
    </main>
  );
}
