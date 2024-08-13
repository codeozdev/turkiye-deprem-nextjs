import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import IlgiliBaglantilarList from "@/components/home/ilgili-baglantilar-list";
import TitleWithContent from "@/components/DynamicComponents/TitleWithContent";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 sm:gap-56 text-center sm:text-start">
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
          <TitleWithContent
            title={`Türkiye Deprem Tarihi`}
            info="Türkiye, aktif fay hatları üzerinde yer aldığı için sıkça deprem yaşayan bir ülkedir. Özellikle Kuzey
            Anadolu, Doğu Anadolu ve Batı Anadolu bölgeleri yüksek deprem riski taşır; bu durum, yapı güvenliği ve afet
            yönetimi konularını kritik hale getirmiştir."
          />
          <Button asChild variant="outline" className="mt-5">
            <Link href={`/sehirler`}>{`Türkiye'de olmuş en büyük depremler`}</Link>
          </Button>
        </div>
      </div>
      {/*Row 2*/}
      <div className="grid sm:grid-cols-2 place-items-center gap-10 w-full">
        {/*1*/}
        <div>
          <TitleWithContent
            title={`Beklenen İstanbul Depremi`}
            info="Uzmanlar, İstanbul'da beklenen büyük depremle ilgili ciddi uyarılarda bulunuyor. Kentin belirli
              bölgelerinde büyük can ve mal kaybı riski taşıyan bu deprem, hazırlıklı olunması gereken önemli bir doğal
              afet olarak öne çıkıyor."
          />
          <Button asChild variant="outline" className="mt-5">
            <Link href="/uzmanlar">Uzmanlar ne diyor? </Link>
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
      {/*Row 3*/}
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
          <TitleWithContent
            title={`Türkiye Deprem Tarihi`}
            info="Türkiye, aktif fay hatları üzerinde yer aldığı için sıkça deprem yaşayan bir ülkedir. Özellikle Kuzey
            Anadolu, Doğu Anadolu ve Batı Anadolu bölgeleri yüksek deprem riski taşır; bu durum, yapı güvenliği ve afet
            yönetimi konularını kritik hale getirmiştir."
          />
          <Button asChild variant="outline" className="mt-5">
            <Link href={`/sehirler`}>{`Türkiye'de olmuş en büyük depremler`}</Link>
          </Button>
        </div>
      </div>
      <IlgiliBaglantilarList />
    </main>
  );
}
