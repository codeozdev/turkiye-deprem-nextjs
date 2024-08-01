export interface WikiProps {
  id: number;
  nufus: number;
  die: number;
  bina: number;
  getDiePercentage: () => number; // 360 dereceye çevirme işlemi
  getDiePercentagediger: () => number; // yüzde hesaplama
  gazete: string;
  image: string;
  image2: string;
  hukumet: string;
  basbakan: string;
  wiki: string;
}

export const wiki: WikiProps[] = [
  {
    id: 1,
    nufus: 24982,
    die: 2514,
    bina: 3_000,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "/gazeteler/hakkari.png",
    image: "/deprem/hakkari1.jpg",
    image2: "/deprem/hakkari2.webp",
    hukumet: "CHP",
    basbakan: "İsmet İnönü",
    wiki:
      "1930 Hakkâri Depremi, 7 Mayıs 1930 tarihinde Türkiye saatiyle 00.34'te Türkiye-\n" +
      "İran sınırında meydana gelen depremdir. Hakkâri bu depremden etkilendi. Büyüklüğü 7,2\n" +
      "Ms olan bu depremde 2514 kişi öldü, yaklaşık 3000 bina hasar gördü.",
  },
  {
    id: 2,
    nufus: 158498,
    die: 32968,
    bina: 116_720,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete:
      "https://www.malumatfurus.org/erzincan-depreminde-mahkumlar-1-gun-serbest-birakildi/cumhuriyet-28-aralik-1939/",
    image: "/deprem/erzincan1.webp",
    image2: "/deprem/erzincan2.jpg",
    hukumet: "CHP",
    basbakan: "Celal Bayar",
    wiki:
      "1939 Erzincan depremi veya Büyük Erzincan Depremi, 27 Aralık 1939 tarihinde gece\n" +
      "01:57’de merkez üssü Erzincan olarak yaklaşık 52 saniye süren ve 7,9 Ms büyüklüğünde\n" +
      "gerçekleşen depremdir. Amerika Birleşik Devletleri Jeoloji Araştırmaları Kurumu (USGS)\n" +
      "depremin büyüklüğünü 7,8 Mw (±0,4) olarak kaydetti. Sarsıntı sonucunda resmî sayılara göre\n" +
      "32 bin 968 kişi yaşamını yitirdi, 100 binden fazla kişi ise yaralandı. Mercalli şiddet ölçeğine göre\n" +
      "depremin şiddeti, ölçeğin en yüksek değeri olan XII (Afetsel) olarak saptanırken 116 bin 720\n" +
      "bina bütünüyle yıkıldı. Ölüm oranlarının yüksek olmasının ana nedenleri arasında; çetin kış\n" +
      "koşullarının olması, yardımların ve arama-kurtarma faaliyetlerinin güç koşullar altında\n" +
      "yürütülmesi gösterildi.",
  },
  {
    id: 3,
    nufus: 317919,
    die: 3014,
    bina: 32_000,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://www.kelkitgazetesi.com/images/upload/48406092_2145722428783065_2302958612256915456_o.jpg",
    image: "/deprem/tokat1.png",
    image2: "/deprem/tokat2.jpg",
    hukumet: "CHP",
    basbakan: "Şükrü Saracoğlu",
    wiki:
      "1942 Niksar-Erbaa depremi 20 Aralık 1942 tarihinde yerel saat ile 17.05'te meydana\n" +
      "gelen, 3000 can kaybına yol açan 7.0 Ms büyüklüğündeki depremdir. Mercalli şiddet\n" +
      "ölçeğine göre en büyük şiddet IX (Şiddetli) olarak hissedildi.",
  },
  {
    id: 4,
    nufus: 363384,
    die: 4014,
    bina: 40_000,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://tosyahaber37.com/sites/1382/uploads/2024/07/10/tosya-depremi-gazete-manset.jpg?",
    image: "/deprem/kastamonu1.jpg",
    image2: "/deprem/kastamonu2.jpg",
    hukumet: "CHP",
    basbakan: "Şükrü Saracoğlu",
    wiki:
      "1943 Tosya-Ladik depremi 27 Kasım günü yerel saat ile 00.20'de Kastamonu, Tosya'da\n" +
      "meydana geldi. 4000 can kaybına yol açan ve 7.2 Ms büyüklüğünde meydana\n" +
      "gelen depremdir. Mercalli şiddet ölçeğine göre en büyük şiddet IX-X (Şiddetli-Yoğun) olarak\n" +
      "hissedildi.",
  },
  {
    id: 5,
    nufus: 257393,
    die: 3959,
    bina: 20_865,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://bolununsesi.com/fotolar/2024/1944-bolu-depremi-80-yil-once-bugun-yasandi-4511706796006.jpg",
    image: "/deprem/bolu3.jpg",
    image2: "/deprem/bolu4.webp",
    hukumet: "CHP",
    basbakan: "Şükrü Saracoğlu",
    wiki:
      "1944 Bolu-Gerede depremi ya da Gerede-Çerkeş depremi, 1 Şubat 1944 tarihinde yerel\n" +
      "saat ile 05.22'de 7.2 Ms büyüklüğünde (tahmini) meydana gelen depremdir. Mercalli şiddet\n" +
      "ölçeğine göre en büyük şiddet IX–X (Şiddetli-Yoğun) olarak hissedildi.",
  },
  {
    id: 6,
    nufus: 289429,
    die: 265,
    bina: 6_750,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNMHnXxJtWGzbu39azhO-Jul22nG2MOgEWA&s",
    image: "/deprem/canakkale1.jpg",
    image2: "/deprem/canakkale2.jpeg",
    hukumet: "DP",
    basbakan: "Adnan Menderes",
    wiki:
      "1953 Yenice-Gönen depremi, 18 Mart 1953 tarihinde Türkiye saatiyle 21:06'da\n" +
      "7.2 Ms büyüklüğünde Çanakkale’nin ilçesi Yenice'nin 12 kilometre doğusunda meydana gelen\n" +
      "depremdir. Deprem sonucu 265 kişi öldü, 6750 bina hasar gördü veya yıkıldı. Yenice\n" +
      "ile Balıkesir’in ilçesi Gönen arasında fay kırığına sebep olduğu için Yenice-Gönen Depremi\n" +
      "olarak bilinir.",
  },
  {
    id: 7,
    nufus: 267579,
    die: 67,
    bina: 3_200,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://static.nadirkitap.com/fotograf/120451/22/Efemera_202103301752431204519.jpg",
    image: "/deprem/mugla1.jpg",
    image2: "/deprem/mugla2.jpg",
    hukumet: "DP",
    basbakan: "Adnan Menderes",
    wiki:
      "1957 Fethiye depremleri, 24 ve 25 Nisan 1957 tarihinde Muğla'nın Fethiye ilçesinde\n" +
      "gerçekleşti. 3200'e yakın evin yıkıldığı veya harap olduğu depremde 67 kişi öldü. Tekrar inşa\n" +
      "edilen Fethiye'de şu an modern bir liman ve marina vardır. 14 Ocak 1969 tarihinde, Fethiye'de\n" +
      "6,2 şiddetinde meydana gelen depremde can kaybı olmamış, ancak yaralanmalar olmuş, evler\n" +
      "ve işyerleri hasar görmüştür.\n" +
      "10 Haziran 2012 tarihinde Fethiye'de 6,1 şiddetinde meydana gelen deprem de tıpkı\n" +
      "1969’daki 6,2 depremdeki gibi can kaybı olmamıştır. Fakat birçok ev ve işyeri hasar görmüştür.\n" +
      "Ayrıca insanlar 1957 depremine benzer bir deprem korkusuyla yüksek kesimlere kaçmışlardır.",
  },
  {
    id: 8,
    nufus: 318219,
    die: 52,
    bina: 5_200,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://k2haber.com.tr/wp-content/uploads/2020/10/bolu-abant-depremi-1957.png",
    image: "/deprem/bolu1.webp",
    image2: "/deprem/bolu2.jpg",
    hukumet: "DP",
    basbakan: "Adnan Menderes",
    wiki: "1957 Abant depremi, Kuzey Anadolu Fay Hattı üzerinde, Mudurnu vadisinde meydana elen deprem. Deprem şiddeti IX, magnitüdü 7.1 olarak tespit edilmiştir. Depremde 52 kişi ölmüş, 101 kişi yaralanmış, 5000'den fazla ev hasar görmüştür.",
  },
  {
    id: 9,
    nufus: 670669,
    die: 23,
    bina: 5_398,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete:
      "https://cdn03.ciceksepeti.com/cicek/kcm34589408-1/XL/yeni-istanbul-gazetesi-7-ekim-1964-gonen-manyas-susurluk-yerle-bir-oldu-gz53205-kcm34589408-1-fc64b2fc3b17418d9e8ef351b6060091.jpg",
    image: "/deprem/balikesir1.webp",
    image2: "/deprem/balikesir2.jpg",
    hukumet: "CHP - YTP",
    basbakan: "İsmet İnönü",
    wiki:
      "Deprem, Anadolu'nun batısında hissedilmiştir. Manyas, Gönen, Mustafakemalpaşa, Karacabey, Susurluk ve Bandırma ilçelerinde hasar oluşmuştur. Mercalli ölçeğine göre şiddeti IX olarak hesaplanan deprem sonucunda 5.398 bina hasar görmüş, 23 kişi ölmüştür.\n" +
      "\n" +
      "Manyas Kuşgölü'nün güneyinde kalan bölgede yüzey deformasyonu oluşmuş, çoğunluğu kuzeybatı-güneydoğu yönünde kademeli sıralanan tansiyon çatlakları tespit edilmiştir.",
  },
  {
    id: 10,
    nufus: 439967,
    die: 1086,
    bina: 19_291,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmHLJdMXJjNtGU0aJo-v2bwfK_QPM_SG7uDAB4Lqys6Red6Z247Up1lNK9sM8GEjf_x0&usqp=CAU",
    image: "/deprem/kutahya1.jpg",
    image2: "/deprem/kutahya2.jpg",
    hukumet: "AP",
    basbakan: "Süleyman Demirel",
    wiki:
      "1970 Gediz depremi, 28 Mart 1970 tarihinde, mahallî saatle 23.00'ten az sonra,\n" +
      "merkezi Kütahya’nın batısındaki Gediz yöresinde meydana gelen depremdir. Depremde Batı\n" +
      "Anadolu sarsılmıştır. Bu depremi daha başka sarsıntılar takip etmiş ve haftalar sonra dahi farklı\n" +
      "büyüklükte sarsıntılar ve ufak depremler hissedilmiştir. Depremin dış merkezi 39.2°N ve 29.5°E\n" +
      "olarak verilmektedir. Sarsıntının büyüklüğü Richter ölçüsüne göre 7,6 idi. Depremin menşei\n" +
      "tektoniktir.",
  },
  {
    id: 11,
    nufus: 325763,
    die: 3841,
    bina: 9_232,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete:
      "https://www.gokcekoleksiyon.com/milliyet-halk-gazetesi-26-kasim-1976-van-depremi-van-bolgesinde-olu-sayisi-4-bini-gecti-gz86692-gazete-gokcekoleksiyon-187107-95-B.jpg",
    image: "/deprem/van3.webp",
    image2: "/deprem/van4.jpg",
    hukumet: "AP - MSP - CGP - MHP",
    basbakan: "Süleyman Demirel",
    wiki:
      "24 Kasım 1976'da 7,5 büyüklüğündeki depremde, 3 bin 840 kişi yaşamını yitirdi, yaklaşık 500 kişi yaralandı ve 10 bin bina hasar gördü. 2000 kilometrekarelik bir alandaki evlerin yüzde 80’i yıkıldı.\n" +
      "\n" +
      "Depremin yanı sıra bölgede gece hava sıcaklığının -17 dereceye kadar düşmesi sonucu donma nedeniyle de ölümler oldu. Yağmur ve kar yağışları nedeniyle kurtarma ve yardım çalışmaları gecikti. Deprem en çok Muradiye ve çevre ilçeler olan Erciş ve Özalp’de can ve mal kaybına sebep oldu. 3 bin 304 kişilik nüfusa sahip Çaldıran’da evlerin yüzde 95’i yıkıldı ve 615 kişi öldü.",
  },
  {
    id: 12,
    nufus: 1206085,
    die: 17482,
    bina: 73_342,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://static.daktilo.com/sites/1311/uploads/2023/02/20/99-depreminde-gazeteler-ne-yazmisti-1%20(1).jpeg",
    image: "/deprem/kocaeli1.jpg",
    image2: "/deprem/kocaeli2.jpg",
    hukumet: "DSP - MHP - ANAP",
    basbakan: "Bülent Ecevit",
    wiki:
      "1999 Gölcük Depremi, İzmit Depremi, Marmara Depremi veya 17 Ağustos 1999\n" +
      "Depremi. 17 Ağustos 1999 sabahı, yerel saatle 03:02'de meydana gelen Kocaeli /\n" +
      "Gölcük merkezli depremdir. Aletsel büyüklüğü Mw=7,8 (Kandilli Rasathanesi) veya Mw = 7,6\n" +
      "(USGS) ölçülen deprem, büyük çapta can ve mal kaybına neden olmuştur.",
  },
  {
    id: 13,
    nufus: 314266,
    die: 763,
    bina: 35_519,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://www.uzumbaba.com/belgeseller/tarihi-gazeteler/1999-2002/1999-2002_pagenumber.004.jpg",
    image: "/deprem/duzce1.webp",
    image2: "/deprem/duzce2.webp",
    hukumet: "DSP - MHP - ANAP",
    basbakan: "Bülent Ecevit",
    wiki:
      "1999 Düzce Depremi, 12 Kasım 1999 Cuma günü saat 18.57'de aletsel büyüklüğü 7,5\n" +
      "Mw ve merkez üssü Düzce olan depremdir. 30 saniye süreyle etkili olan deprem, pek çok ilin\n" +
      "yanı sıra Ukrayna'dan da hissedildi.\n" +
      "Başbakanlık Kriz Yönetim Merkezinin açıklamasına göre ölü sayısı 845, yaralı sayısı\n" +
      "4.948, depremde hasar gören ve yıkılması gereken bina sayısı 3.395, yıkık ya da ağır hasarlı ev\n" +
      "sayısı 12.939, iş yeri sayısı ise 2.450'dir.",
  },
  {
    id: 14,
    nufus: 1022532,
    die: 644,
    bina: 17_005,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://www.haksozhaber.net/d/gallery/37_12.jpg",
    image: "/deprem/van1.webp",
    image2: "/deprem/van2.jpg",
    hukumet: "AKP",
    basbakan: "Recep Tayyip Erdoğan",
    wiki:
      "Ekim 2011 Van Depremi, 23 Ekim 2011’de Türkiye saati ile 13.41'de Van'da meydana\n" +
      "gelen ve 25 saniye süren bir depremdir. Depremin merkez üssü Van'a 17 kilometre uzaklıktaki\n" +
      "Tabanlı Köyü’dür. Yapılan değerlendirmelerde depremin büyüklüğü Kandilli\n" +
      "Rasathanesi tarafından Richter ölçeğine göre 6.6ML, ABD Jeoloji Araştırmaları\n" +
      "Kurumu tarafından ise Moment magnitüd ölçeğine göre 7.2 Mw olarak duyuruldu. Kandilli\n" +
      "Rasathanesi'nden daha sonra yapılan açıklamada, depremin şiddetinin depremin merkez\n" +
      "üssünde 9.0 olduğu belirtildi ve depremin moment büyüklüğü 7.2 Mw olarak düzeltildi.",
  },
  {
    id: 15,
    nufus: 1_116_618,
    die: 53_104,
    bina: 239_151,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://i.turkiyegazetesi.com.tr/images/23-02/07/manset.jpg",
    image: "/deprem/kahramanmaras1.webp",
    image2: "/deprem/kahramanmaras2.webp",
    hukumet: "AKP",
    basbakan: "Recep Tayyip Erdoğan",
    wiki:
      "18\n" +
      "2023 Kahramanmaraş Depremleri\n" +
      "2023 Kahramanmaraş Depremleri ya da 2023 Türkiye-Suriye Depremleri, 6 Şubat\n" +
      "2023'te dokuz saat arayla meydana gelen, merkez üsleri sırasıyla Kahramanmaraş'ın Pazarcık\n" +
      "ve Ekinözü ilçesi olan, 7,8 Mw (± 0,1) ve 7,5 Mw büyüklüklerindeki iki depremdir. Depremler\n" +
      "sonucunda Türkiye'de resmî rakamlara göre en az 50 bin 96, Suriye'de ise en az 8 bin 476 kişi\n" +
      "hayatını kaybetti ve toplam 122 binden fazla kişi ise yaralandı. Depremlerin ardından\n" +
      "büyüklüğü 6,7 Mw 'e kadar varan on yedi bine yakın artçı sarsıntı gerçekleşti.",
  },
  {
    id: 16,
    nufus: 1_116_618,
    die: 53_104,
    bina: 239_151,
    getDiePercentage() {
      const percentage = (this.die / this.nufus) * 100;
      return (percentage / 100) * 360;
    },
    getDiePercentagediger() {
      return (this.die / this.nufus) * 100;
    },
    gazete: "https://i.turkiyegazetesi.com.tr/images/23-02/07/manset.jpg",
    image: "/deprem/kahramanmaras1.webp",
    image2: "/deprem/kahramanmaras2.webp",
    hukumet: "AKP",
    basbakan: "Recep Tayyip Erdoğan",
    wiki: "Saat 13.24'teki 7,6 büyüklüğündeki ikinci büyük deprem ise birinci depremin yaklaşık 100 kilometre kuzeyindeki Doğu Anadolu Fay Hattı'ndan ayrılan bir kol olan Çardak Fayı'nın kırılması ile meydana geldi. Bu ikinci depremin merkez üssü Kahramanmaraş'ın Ekinözü ilçesine 3 kilometre, Elibistan'a 14 kilometre, Nurhak'a 23 kilometre, Göksun'a 63 kilometre, Kahramanmaraş'a 59 kilometre, Adıyaman'a 100 kilometre ve Malatya'ya da 100 kilometre mesafededir.",
  },
];
