import Image from "next/image";
import Link from "next/link";
import { IlgiliBaglantilarProps } from "@/data/ilgili-baglantilar";

export interface IlgiliBaglantilarItemProps {
  item: IlgiliBaglantilarProps;
}

export default function IlgiliBaglantilarItem({ item }: IlgiliBaglantilarItemProps) {
  return (
    <Link href={item.link} target="_blank">
      <Image src={item.logo} alt="logo" width={250} height={250} className="aspect-square object-fill w-full" />
    </Link>
  );
}
