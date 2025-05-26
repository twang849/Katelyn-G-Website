import NavBar from "./ui/NavBar";
import Hero from "./ui/Hero"; 
import InfoBoxOne from "./ui/InfoBoxOne";
import InfoBoxTwo from "./ui/InfoBoxTwo";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex items-center flex-col h-[170rem]">
      <NavBar/>
      <Hero/>
      <InfoBoxOne/>
      <InfoBoxTwo/>
    </div>
  );
}
