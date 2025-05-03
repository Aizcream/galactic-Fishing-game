import React from "react";
import player from "../../../assets/TopPlayers/player Icon.png";
import "./Player.css";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { BeakerIcon } from "@heroicons/react/24/solid";

interface PlayerProps {
  name: string;
  exp: number;
  gold: string;
  rank: string;
  isPoisoned: boolean;
}

const Player = ({ name, exp, gold, rank, isPoisoned }: PlayerProps) => {
  return (
    <div className="card-player cursor-pointer">
      <div className="flex mx-auto justify-between items-center w-full h-full gap-1 md:gap-4">
        <div className="flex items-center gap-1 md:gap-4">
        <h1 className="player-name text-3xl" data-text={rank}>
          {rank}
        </h1>
        <img className="w-16 bg-teal-50 rounded-full" src={player} alt="player Icon" />
        <div className="flex flex-col">
          <p className="text-base md:text-2xl player-name" data-text={name}>
            {name}
          </p>
          <p className="text-orange-50 text-shadow-lg/20">{exp} EXP</p>
        </div>
        </div>
        <div className="flex md:gap-2">
          <div className="gold-icon bg-orange-950 rounded-full p-1">
            <CircleStackIcon className="text-amber-300" />
          </div>
          <p className="text-base md:text-lg gold-ammount">{gold}</p>
          {isPoisoned && (
          <BeakerIcon className="text-lime-500 w-8 bg-orange-50 shadow-xl/30 rounded-full p-1" />
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Player;
