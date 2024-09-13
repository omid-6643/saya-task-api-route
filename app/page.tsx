import HeroSection from "./components/hero-section";
import Posts from "./components/posts";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <HeroSection />
      <Posts />
    </div>
  );
};

export default Home;
