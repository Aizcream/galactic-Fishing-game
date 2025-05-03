interface PodiumCardProps {
  position: number;
  name: string;
  score?: number;
  image: string;
  xp?: number;
  rank: number;
  isInfected: boolean;
  description?: string;
}

import "./PodiumCard.css";
import RibbonCurvedText from "../../molecules/RibbonCurvedText/RibbonCurvedText";

const PodiumCard = ({
  position,
  name,
  image,
  rank,
  score,
  xp,
  isInfected,
  description,
}: PodiumCardProps) => {
  const positions = ["bg-amber-300", "bg-slate-400", "bg-red-400"];
  console.log("position", position, positions[position - 1]);
  console.log("name", name);
  return (
    <>
      <div className={"card cursor-pointer w-30 h-44 sm:w-44 sm:h-60"}>
        <div className="flex flex-col justify-center items-center h-full w-full flip-card">
          <div
            className={
              "flex flex-col relative justify-center items-center card-inner " +
              positions[position - 1]
            }
          >
            <img src={image} className="w-3/4 z-2 avatar" />
            <RibbonCurvedText top={position} name={name} />
            <div className="white-circle z-0"></div>
            <div
              className={
                "rounded-full absolute rank " + positions[position - 1]
              }
            >
              {position}
            </div>
          </div>
          <div className="card-back">
            <h1 className="text-white text-2xl font-extrabold text-shadow-lg/30">
              {name}
            </h1>
            <span className="text-blue-300 text-shadow-lg/10">{rank} LVL</span>

            <div className="stats">
              <div className="flex items-center justify-center">
                🪙
                <div className="flex flex-col items-start">
                  <span className="text-white text-sm">gold</span>
                  <p className="text-white text-xs leading-none">{score}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
              ⚡
                <div className="flex flex-col items-start">
                  <span className="text-white text-sm">XP</span>
                  <p className="text-white text-xs leading-none">{xp}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
              ☣️
                <div className="flex flex-col items-start">
                  <span className="text-white text-sm">Infected</span>
                  <p className="text-white text-xs leading-none">{isInfected.toString()}</p>
                </div>
              </div>
              <p className="text-white text-xs leading-none"> {description} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodiumCard;
