type Props = {
  header: string;
  text: string;
  text2: string;
  text3: string;
};

export default function TextSection({ header, text, text2, text3 }: Props) {
  return (
    <div className="mr-16 ml-9 py-9">
      <h1 className="pb-7 text-5xl font-bold text-[#004D47]">{header}</h1>
      <p className="mb-2 text-lg">{text}</p>
      <p className="mb-2 text-lg">{text2}</p>
      <p className="mb-2 text-lg">{text3}</p>
    </div>
  );
}
