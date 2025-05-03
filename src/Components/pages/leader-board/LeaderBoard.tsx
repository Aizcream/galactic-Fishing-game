// src/components/pages/LeaderBoard.tsx
import { useState, useEffect } from "react";
import "./LeaderBoard.css";
import PodiumCard from "../../organism/podiumCard/PodiumCard";
import top1 from "../../../assets/TopPlayers/top1.png";
import top2 from "../../../assets/TopPlayers/top2.png";
import top3 from "../../../assets/TopPlayers/top3.png";
import TableLeaderBoard from "../../molecules/tableLeaderBoard/TableLeaderBoard";
import { fetchFromAPI } from "../../../services/apiService";
import Loader from "../../molecules/loader/Loader";

const topImages = [top1, top2, top3];

interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
  fishEmojis: string;
  emojiDescription: string;
  isInfected: boolean;
}

interface LeaderboardData {
  players: Player[];
  legend: {
    tiers: {
      range: string;
      representation: string;
      example: string;
    }[];
  };
}

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFromAPI<LeaderboardData>("/game/leaderboard")
      .then((data) => setLeaderboardData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const topPlayers = leaderboardData?.players.slice(0, 3) || [];

  return (
    <div className="relative min-h-screen">
      {/* Contenido principal siempre visible */}
      <div className="container-leaderboard">
        <div className="rounded-full absolute rank h-16">
          <p>{"<"}</p>
        </div>
        <div className="flex flex-col items-center justify-start h-full relative z-10 gap-10 w-9/10 md:w-1/2">
          <img
            className="w-70 slide-in-elliptic-top-fwd pt-1"
            src="src/assets/TitleGame.png"
            alt="Galactic Fishing Game Title"
          />

          {/* Si hay error, lo mostramos aquí */}
          {error && (
            <div className="text-red-500 text-center">
              Error cargando leaderboard: {error}
            </div>
          )}

          {/* Tarjetas de Podio */}
          {!error && (
            <div className="grid grid-cols-3 gap-6 mt-4 container-cards justify-items-center">
              {topPlayers.map((player, idx) => (
                <PodiumCard
                  key={player.username}
                  position={idx + 1}
                  name={player.username}
                  score={player.xp}
                  xp={player.xp}
                  image={topImages[idx]}
                />
              ))}
            </div>
          )}

          {/* Tabla */}
          {!error && leaderboardData && (
            <TableLeaderBoard players={leaderboardData.players.slice(3)} />
          )}
        </div>
      </div>

      {/* Overlay Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Este div debe aplicar el desenfoque de tu Loader */}
          <Loader />
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
