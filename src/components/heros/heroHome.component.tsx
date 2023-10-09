// Assets
import background from "../../assets/bg_hero_home.jpg";

interface HeroHomeProps {}

export const HeroHome: React.FC<HeroHomeProps> = () => {
  return (
    <div className="relative h-[60vh] md:h-[100vh] max-h-[100vh] w-full">
      <img
        src={background}
        alt="word"
        className="absolute top-0 left-0 z-[-2] w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 flex justify-center items-center p-10">
        <span className="text-[1.5em] md:text-[4em] font-[900] text-center leading-[1em]">
          Share your adventures on 2 wheels
        </span>
      </div>
    </div>
  );
};
