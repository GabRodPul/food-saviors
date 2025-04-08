import Image from "next/image";
import Link from "next/link";
import goldstar from "public/icons/GoldStar.svg";
import blackstar from "public/icons/BlackStar.svg";

type BusinessCategory = "Restaurant" | "Bakery" | "Groceries";

type Prop = {
  buss: {
    id: number;
    name: string;
    location: string;
    image: string;
    category: BusinessCategory;
    numReviews: number;
    numStars: number;
  };
  stars: boolean[];
};

export default function Card({ buss, stars }: Prop) {
  return (
    <div
      key={buss.id}
      className="overflow-hidden rounded-lg border border-[#009688]"
    >
      <div className="">
        <div className="w-full">
          <Image
            src={buss.image}
            alt={buss.name}
            width={500} // any width for ratio
            height={300} // required for layout
            className="h-auto w-full object-cover"
          />
        </div>
        <h3 className="mx-2 mt-2 text-lg font-medium">{buss.name}</h3>
        <p className="ml-2 text-xs">{buss.category}</p>
        <div className="ml-2 flex items-center">
          {stars.map((isYellow, index) => (
            <Image
              key={index}
              src={isYellow ? (goldstar as string) : (blackstar as string)}
              alt="Star"
              width={12}
              height={12}
            />
          ))}

          <span className="ml-1 text-xs font-thin text-[#898181]">
            ({buss.numReviews})
          </span>
        </div>
      </div>
      <Link
        className="mt-3 flex bg-[#009688] p-2 text-xs font-thin text-white"
        href="#"
      >
        See more
      </Link>
    </div>
  );
}
