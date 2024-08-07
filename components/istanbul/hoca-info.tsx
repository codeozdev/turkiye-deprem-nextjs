interface HocaInfoProps {
  title: string;
  info: string;
}

export default function HocaInfo({ title, info }: HocaInfoProps) {
  return (
    <div>
      <h4>{title}</h4>
      <p className="leading-relaxed font-normal">{info}</p>
    </div>
  );
}
