interface ButtonProps {
  text: string;
  icon: React.RefAttributes<SVGSVGElement>;
  onClick?: () => void;
}

const HomeButton = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="min-w-[200px] cursor-pointer transition-all bg-orange-500 text-white px-8 py-2 rounded-2xl border-orange-700
      border-b-[10px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[12px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-extrabold text-shadow-lg text-2xl scale-in-center animate-delay-500"
    >
      <>
        {icon}
        {text}
      </>
    </button>
  );
};

export default HomeButton;
