import Image from "next/image";

type Props = {
  image: any;
  name: string;
};

export default function Project({ image, name }: Props) {
  return (
    <div className="">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-xl"
      />
    </div>
  );
}
