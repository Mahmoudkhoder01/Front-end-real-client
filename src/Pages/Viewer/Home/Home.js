import Landing from "../../../Components/Landing/Landing";
import Mission from "../../../Components/Mission/Mission";
import Aboutceo from "../../../Components/AboutCEO/Aboutceo";
import Team from "../../../Components/TeamSection/TeamSection";
import Service from "../../../Components/ServicesSection/Service";

export default function Home() {
  return (
    <div>
      <Landing />
      <Aboutceo />
      <Mission />
      <Team />
      <Service />
    </div>
  );
}
