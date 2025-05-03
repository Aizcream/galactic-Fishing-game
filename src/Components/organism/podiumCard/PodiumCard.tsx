interface PodiumCardProps {
  position: number;
  name: string;
  score?: number;
  image: string;
  xp?: number;
}

import "./PodiumCard.css";
import RibbonCurvedText from "../../molecules/RibbonCurvedText/RibbonCurvedText";

const PodiumCard = ({ position, name, image }: PodiumCardProps) => {
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
          <div className="card-back"></div>
        </div>
      </div>
    </>
  );
};

export default PodiumCard;
