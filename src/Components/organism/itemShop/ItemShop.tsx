import React, { useState } from "react";
import "./ItemShop.css";

import potion from "../../../assets/potion.png";
import potion2 from "../../../assets/potion2.png";
import fishingRod from "../../../assets/enhancedFishingRod.png";
import Modal from "../../molecules/modal/Modal";

interface ItemShopProps {
  name: string;
  description: string;
  cost: number;
  type: string;
}

const typeToImage: Record<string, string> = {
  fishing_rod: fishingRod,
  poison_leveling: potion,
  poison_delay: potion2,
  poison_recovery: potion,
  poison_reveal_fishes: potion2,
};

const ItemShop = ({ name, cost, type, description }: ItemShopProps) => {
  const image = typeToImage[type] || potion2;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="item flex flex-col items-center justify-center bg-gray-800 p-4 rounded shadow-lg w-64 cursor-pointer
                   transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                   onClick={() => setIsModalOpen(true)}
      >
        <img className="h-18 mb-4" src={image} alt={name} />
        <div className="info-container text-white text-center">
          <button
            className="font-extrabold text-yellow-400 p-2 whitespace-nowrap cursor-pointer"
          >
            💰{cost}
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center text-gray-800 space-y-3">
          <img className="h-18 mb-4" src={image} alt={name} />
          <h2 className="text-xl font-bold">{name}</h2>
          <p>
            <span className="font-semibold text-center">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Type:</span> {type}
          </p>
          <p>
            <span className="font-semibold">Cost:</span> 💰{cost}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ItemShop;
