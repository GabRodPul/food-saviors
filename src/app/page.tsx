import React from "react";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <nav className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-white">Food Savers</h1>
        <button className="text-white">
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      <div className="flex h-[70vh] flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="text-3xl leading-snug font-bold">
          Save Food.
          <br /> Save Money.
          <br /> Save the Planet.
        </h2>
        <div className="mt-6 animate-bounce">
          <img src="/arrowdown.svg" alt="Arrow down" className="h-8 w-8" />
        </div>
      </div>

      <div className="absolute right-0 bottom-10 left-0 flex justify-center space-x-4">
        {[
          { label: "Restaurants", icon: "/restauranticon.svg" },
          { label: "Bakeries", icon: "/bakeriesicon.svg" },
          { label: "Groceries", icon: "/groceriesicon.svg" },
        ].map(({ label, icon }) => (
          <button
            key={label}
            className="flex w-24 flex-col items-center rounded-2xl bg-white/20 p-4 text-white backdrop-blur-md"
          >
            <img src={icon} alt={label} className="h-8 w-8" />
            <span className="mt-1 text-sm">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
