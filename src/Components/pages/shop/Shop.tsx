// src/components/pages/Shop.tsx
import { useEffect, useState } from "react";
import "./Shop.css";
import roof from "../../../assets/roof.png";
import title from "../../../assets/TitleGame.png";
import ItemShop from "../../organism/itemShop/ItemShop";
import Loader from "../../molecules/loader/Loader";
import { getMarketItems, MarketItem } from "../../../services/marketService";

const Shop = () => {
  const [items, setItems] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMarketItems()
      .then(setItems)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // 1️⃣ Mostrar loader mientras carga
  if (loading) {
    return (
      <div className="shop-container w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  // 2️⃣ Mostrar error si hubo alguno
  if (error) {
    return (
      <div className="shop-container w-full h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  // 3️⃣ Renderizar la UI normal cuando ya cargó
  return (
    <div className="shop-container w-full h-screen flex flex-col justify-center items-center magicpattern">
      <img
        className="w-70 slide-in-elliptic-top-fwd pt-1"
        src={title}
        alt="Galactic Fishing Game Title"
      />
      <h1 className="text-2xl text-white font-extrabold market tracking-in-expand animate-delay-1000">Market</h1>

      <div className="flex flex-col items-center scale-in-center animate-delay-1000">
        <img src={roof} alt="roof" className="relative z-3" />
        <div className="container-wood grid gap-y-10 mt-4 justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item) => (
            <ItemShop
              key={item.id}
              name={item.name}
              description={item.description}
              cost={item.cost}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
