export interface SehirlerPros {
  id: number;
  name: string;
  deprem: number;
  year: string;
  thumbnail: string;
}

export const sehirler: SehirlerPros[] = [
  {
    id: 1,
    name: "Hakkari",
    deprem: 7.2,
    year: "7 Mayıs 1930",
    thumbnail: "/thumbnail-il/hakkari.jpg",
  },
  {
    id: 2,
    name: "Erzincan",
    deprem: 7.9,
    year: "27 Aralık 1939",
    thumbnail: "/thumbnail-il/erzincan.jpg",
  },
  {
    id: 3,
    name: "Tokat/Erbaa",
    deprem: 7.0,
    year: "20 Aralık 1942",
    thumbnail: "/thumbnail-il/tokat.jpg",
  },
  {
    id: 4,
    name: "Kastamonu/Tosya-Ladik",
    deprem: 7.2,
    year: "27 Kasım 1943",
    thumbnail: "/thumbnail-il/kastamonu.jpg",
  },
  {
    id: 5,
    name: "Bolu/Gerede",
    deprem: 7.2,
    year: "1 Şubat 1944",
    thumbnail: "/thumbnail-il/bolu.jpg",
  },
  {
    id: 6,
    name: "Çanakkale",
    deprem: 7.2,
    year: "18 Mart 1953",
    thumbnail: "/thumbnail-il/canakkale.jpg",
  },
  {
    id: 7,
    name: "Muğla/Fethiye",
    deprem: 7.1,
    year: "25 Nisan 1957",
    thumbnail: "/thumbnail-il/muğla.jpg",
  },
  {
    id: 8,
    name: "Bolu/Abant",
    deprem: 7.1,
    year: "26 Mayıs 1957",
    thumbnail: "/thumbnail-il/bolu.jpg",
  },
  {
    id: 9,
    name: "Balıkesir/Gönen",
    deprem: 7.0,
    year: "6 Ekim 1964",
    thumbnail: "/thumbnail-il/balıkesir.jpg",
  },
  {
    id: 10,
    name: "Kütahya/Gediz",
    deprem: 7.2,
    year: "28 Mart 1970",
    thumbnail: "/thumbnail-il/kütahya.jpg",
  },
  {
    id: 11,
    name: "Van",
    deprem: 7.5,
    year: "24 Kasım 1976",
    thumbnail: "/thumbnail-il/van.jpg",
  },
  {
    id: 12,
    name: "Kocaeli/Gölcük",
    deprem: 7.4,
    year: "17 Ağustos 1999",
    thumbnail: "/thumbnail-il/kocaeli.jpg",
  },
  {
    id: 13,
    name: "Düzce",
    deprem: 7.2,
    year: "12 Kasım 1999",
    thumbnail: "/thumbnail-il/düzce.jpg",
  },
  {
    id: 14,
    name: "Van",
    deprem: 7.2,
    year: "23 Ekim 2011",
    thumbnail: "/thumbnail-il/van.jpg",
  },
  {
    id: 15,
    name: "Kahramanmaraş I.",
    deprem: 7.7,
    year: "6 Şubat 2023",
    thumbnail: "/thumbnail-il/kahramanmaraş.jpg",
  },
  {
    id: 16,
    name: "Kahramanmaraş II.",
    deprem: 7.6,
    year: "6 Şubat 2023",
    thumbnail: "/thumbnail-il/kahramanmaraş.jpg",
  },
];
