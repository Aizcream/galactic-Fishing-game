import ribbon from "../../../assets/ribbon.png";
import "./RibbonCurvedText.css";

interface CurvedTextProps {
  name: string;
  top?: number;
  isLeaderboard?: boolean;
}

const RibbonCurvedText = ({
  name,
  top=3,
  isLeaderboard = false,
}: CurvedTextProps) => {
  const ribbonColor=["hue-rotate-85","hue-rotate-330"];
  return (
    <div className={"relative z-3" + (isLeaderboard ? " w-auto" : " w-6/5 bottom-1/10")}>
      <img
        src={ribbon}
        alt="Ribbon background"
        className={"ribbon-container " + (isLeaderboard ? " w-1/2 mx-auto " : "") + ribbonColor[top-1] }
      />
      <h1 className={"name-player" + (isLeaderboard ? " leader-board__title text-base md:text-[26px]" : " text-xs md:text-base")}>
        {name}
      </h1>
    </div>
  );
};

export default RibbonCurvedText;