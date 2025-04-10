import BakeriesButton from "../_components/BakeriesButton";
import Card from "../_components/card";
import Footer from "../_components/Footer";
import GroceriesButton from "../_components/GroceriesButton";
import RestaurantsButton from "../_components/RestaurantsButton";

type BusinessCategory = "Restaurant" | "Bakery" | "Groceries";

/*
--------------------------------------------
might have coordinates as well for the api?
--------------------------------------------
type Location = {
  street?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};
*/

type Business = {
  id: number;
  name: string;
  location: string;
  image: string;
  category: BusinessCategory;
  numReviews: number;
  numStars: number;
};

/*
--------------------------------------------
Getting random numbers for the review and stars
--------------------------------------------
*/

const getRandomNum = (max = 200) => {
  return Math.floor(Math.random() * max);
};

/*
----------
Dummy data
----------
*/
const businesses: Business[] = [
  {
    id: 1,
    name: "CarreFour",
    location:
      "Centro Comercial Las Arenas, Ctra. del Rincón, s/n, 35010 Las Palmas de Gran Canaria, Las Palmas",
    image: "/card-img/grocery.svg",
    category: "Groceries",
    numReviews: getRandomNum(),
    numStars: getRandomNum(4) + 1,
  },
  {
    id: 2,
    name: "Mercadona",
    location:
      "C. República Dominicana, s/n, 35010 Las Palmas de Gran Canaria, Las Palmas",
    image: "/card-img/grocery2.svg",
    category: "Groceries",
    numReviews: getRandomNum(),
    numStars: getRandomNum(4) + 1,
  },
  {
    id: 3,
    name: "La Korienda",
    location: "C. Daoiz, 15, 35010 Las Palmas de Gran Canaria, Las Palmas",
    image: "/card-img/Restaurant1.svg",
    category: "Restaurant",
    numReviews: getRandomNum(),
    numStars: getRandomNum(4) + 1,
  },
];

export default function CardPage() {
  return (
    <>
      <div className="mx-16 my-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((buss) => {
          const stars = Array.from({ length: 5 }, (_, i) => i < buss.numStars);
          return <Card key={buss.id} buss={buss} stars={stars} />;
        })}

        {/*
         ------------------------------------------------
          change this entire thing to the right component
         ------------------------------------------------
          */}
        <div className="absolute right-0 bottom-5 left-0 flex justify-center">
          <div className="flex space-x-4 rounded-lg bg-[#004D47]/50 p-6">
            <RestaurantsButton />
            <BakeriesButton />
            <GroceriesButton />
          </div>
        </div>
      </div>
      {/*
       ---------
       To HERE!
       ---------
        */}

      <Footer />
    </>
  );
}
