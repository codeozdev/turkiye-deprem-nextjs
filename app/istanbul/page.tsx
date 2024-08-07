import Image from "next/image";
import HocaInfo from "@/components/istanbul/hoca-info";

export default function IstanbulPage() {
  return (
    <div className="flex flex-col gap-20">
      {/*Naci*/}
      <div className="w-full grid sm:grid-cols-2 gap-10 px-2 sm:px-0">
        <div className="sm:col-span-2 relative">
          <Image
            src={"/istanbul/nacihoca.jpg"}
            alt="nacihoca"
            width={400}
            height={400}
            className="object-cover w-full h-[400px] object-top"
            quality={100}
            priority
          />
          <h4 className="absolute -top-4 -left-4 px-3 font-semibold text-white bg-red-500">Prof. Dr. Naci Görür</h4>
          <h5 className="absolute -top-4 -right-4 px-3 bg-red-500 italic text-white">{`"Marmara'da 7,5 deprem olabilir"`}</h5>
        </div>
        <HocaInfo
          title={`"İstanbul uzatmaları oynuyor"`}
          info="6 sene içinde artı-eksi olarak da 10 sene içinde deprem olması bekleniyor. Biz şu anda uzatmaları oynuyoruz.
          Marmara'da 7 ve üzerinde deprem olma olasılığı yüzde 47. Bizim deprem öncesinde ve sonrasında neler
          yapmamız gerektiğini konuşmalıyız. İş 'yat-çök-kapan'dan ibaret değil. Vatandaşlar ve devlet el ele
          verip bunun üstesinden gelmelidir."
        />

        <HocaInfo
          title={`"İstanbul'da, 11 ilin toplamından daha fazla can ve mal kaybı olur"`}
          info="Depreme hazır olmanın en önemli bileşeni halktır. İstanbul'da, 11 ilin toplamından daha fazla can ve mal kaybı olur. İstanbul depreminde 50 binden fazla can kaybı olabilir. İleri teknolojik toplumları olanlar bu depremlerde fazla ölüm verenleri geri kalmış olarak görüyor. Bu faylar deprem üretiyor ve milyonlarca yıl da üretecek."
        />

        <HocaInfo
          title={`"İki kolun aynı anda kırılma ihtimali var"`}
          info="İstanbul'da 1 Nisan'da seçilecek belediye başkanı şehri depreme hazırlamalı. Tehdit Marmara'da. İlk seçilen belediye başkanı tehdidin nereden geldiğini bilmeli. Marmara Denizi ve Kuzey Anadolu Fayı'nın Kuzey kolunda deprem oluşacak. Bunlardan biri adalar kolu, diğeri de Kumburgaz koludur. Bu iki kolun aynı anda kırılma ihtimali var. 1766'da 3 ay arayla kırılmış. İkisi birden kırılırsa 7.6'ya kadar çıkma olasılığı var. Deprem denince siyasilerin aklına 'yapı stoku' geliyor. İstanbul'da yapı stokunun artırılması zararı azaltır."
        />

        <HocaInfo
          title={`"Kanalizasyon içme suyu şebekesine karışır"`}
          info="İstanbul'da yüzde 47 olasılığıyla bir deprem olması halinde Görür yaşanacak sorunları, İstanbul’da kanalizasyon ve içme suyu yan yana gider. Depremde bunlar kırılır, tahrip olur, kanalizasyon içme suyu şebekesine karışır. Salgın hastalık gırla gider. Sular kesilir, hijyen kalmaz. İnsanlar susuzluk çeker. Su getirip halka dağıtmak büyük problem olur, yollar kapalı olur. İnsanlar yıkanamaz."
        />
      </div>

      {/*Celal*/}
      <div className="w-full grid sm:grid-cols-2 gap-10 px-2 sm:px-0">
        <div className="sm:col-span-2 relative">
          <Image
            src={"/istanbul/celalhoca.jpg"}
            alt="celalhoca"
            width={400}
            height={400}
            className="object-cover w-full h-[400px] object-top"
            quality={100}
            priority
          />
          <h4 className="absolute -top-4 -left-4 px-3 font-semibold text-white bg-red-500">Prof. Dr. Celal Şengör</h4>
          <h5 className="absolute -top-4 -right-4 px-3 bg-red-500 italic text-white">{`"Marmara'da 7,6 deprem olabilir"`}</h5>
        </div>

        <HocaInfo
          title={`"Sokaklara girilemeyecek"`}
          info="Tabii ki, bütün İstanbul yerle bir olmayacak. Mustafa Erdik 8 bin binanın akordeon gibi olacağını söylüyordu. Bu sayı galiba daha fazla olacak. 60-70 bin bina tamamen çökmese de yıkılacak. Kurtarma çalışmaları için sokaklara girilemeyecek. Kente giren çıkan yolların önemli bir bölümü kullanılamaz hale gelecek, ortaya çıkacak kaos ortamında sağ kalanlar da günlerce belki haftalarca bloke olacak."
        />

        <HocaInfo
          title={`“Yangınlara müdahale edilemeyecek”`}
          info="Kentin elektrik, su, kanalizasyon ve doğalgaz alt yapısı bitecek. İlk gün her yerde yangınlar olacak. İtfaiye enkaz altında kaldığı için, itfaiyeciler ya enkaz altında olduğu için, ya enkaz altındaki araçlarına ulaşamadığı için bu yangınlara müdahale edilemeyecek."
        />

        <HocaInfo
          title={`“Kenti ağır bir koku saracak”`}
          info="Yeni havalimanı dolgu zemine yapıldığı için muhtemelen hasar alacak ve bir süre kullanılamaz olacak. Zaten o havalimanını kente bağlayan yolların ne olacağını da bilmiyoruz. Atatürk Havalimanı ise en iyi pisti kırıldığı için ancak yarım hizmet verebilecek. Birkaç gün içinde kentte açlık başlayacak. Yağmalar başlayacak. Bunu salgın hastalıklar takip edecek. Enkazlar uzun süre kaldırılamayacak. Kenti ağır bir koku saracak, nefes alınmaz hale gelecek."
        />

        <HocaInfo
          title={`“Yardım ekipleri kente giremeyecek`}
          info="Kent dışından yardım gelemeyecek. Bugün deprem bölgelerine giden yardım ve kurtarma ekiplerinin yüzde 60'ı İstanbul'dan gidiyor. İstanbul yıkılınca İstanbul'a zaten çok ez ekip gelebilecek, gelenler de kente giremeyecek."
        />
      </div>
    </div>
  );
}

/* */
