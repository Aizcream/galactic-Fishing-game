import { useEffect, useRef } from "react";
import { TrophyIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import HomeButton from "../../atoms/homeButton/HomeButton";
import "./Home.css";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const starContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const container = starContainerRef.current;
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  const Buttons = [
    {
      title: "Leader Board",
      icon: <TrophyIcon className="drop-shadow-lg" />,
      path: '/leaderboard',
    },
    {
      title: "Market",
      icon: <ShoppingBagIcon className="drop-shadow-lg" />,
      path: '/shop',
    },
  ];

  return (
    <div className="w-screen h-screen relative overflow-hidden gradient-bg">
      <div ref={starContainerRef} className="absolute inset-0 z-0"></div>

      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <img className="slide-in-elliptic-top-fwd animate-delay-200"
          src="src/assets/TitleGame.png"
          alt="Galactic Fishing Game Title"
        />
        <div className="flex gap-6 pt-7">
          {Buttons.map((button, i) => (
            <HomeButton 
              key={i} 
              text={button.title} 
              icon={button.icon} 
              onClick={() => navigate(button.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;