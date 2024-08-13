interface HocaInfoProps {
  title: string;
  info: string;
}

export default function TitleWithContent({ title, info }: HocaInfoProps) {
  return (
    <div>
      <h4>{title}</h4>
      <p className="">{info}</p>
    </div>
  );
}
