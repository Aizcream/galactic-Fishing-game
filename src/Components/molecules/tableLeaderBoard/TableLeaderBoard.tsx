// TableLeaderBoard.tsx
import "./TableLeaderBoard.css";
import RibbonCurvedText from "../RibbonCurvedText/RibbonCurvedText";
import Player from "../../organism/player/Player";

interface PlayerData {
  rank: number;
  username: string;
  xp: number;
  gold: number;
  isInfected: boolean;
}

interface TableLeaderBoardProps {
  players: PlayerData[];
}

const TableLeaderBoard: React.FC<TableLeaderBoardProps> = ({ players }) => {
  console.log(players);
  return (
    <div className="table-leaderboard top-1/3 md:top-4/10 w-9/10 md:w-1/2 slide-in-bottom animate-delay-200">
      <div className="flex flex-col mx-auto justify-center items-center w-full h-full pt-20">
        <RibbonCurvedText name="Leader Board" isLeaderboard={true} />
        <div className="flex flex-col items-center w-full h-full overflow-scroll gap-4">
          {players.map((p) => (
            <Player
              key={p.username}
              name={p.username}
              exp={p.xp}
              gold={p.gold.toString()}
              rank={p.rank.toString()}
              isPoisoned={p.isInfected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableLeaderBoard;
