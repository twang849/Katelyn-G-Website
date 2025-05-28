import Hero from "./ui/Hero"; 
import InfoBoxOne from "./ui/InfoBoxOne";
import InfoBoxTwo from "./ui/InfoBoxTwo";
import Divider from "./ui/Divider";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex items-center flex-col h-auto">
      <Hero/>
      <Divider/>
      <InfoBoxOne/>
      <Divider/>
      <InfoBoxTwo/>
    </div>
  );
}
