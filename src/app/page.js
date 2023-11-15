import Navbar from "@/components/UI/Navbar";
import Landing from "@/components/Landing";
import Familiar from "@/components/Familiar";
import Meet from "@/components/Meet";
import SelfImprov from "@/components/SelfImprov";
import Rating from "@/components/Rating";
import Start from "@/components/Start";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Familiar />
      <Meet />
      <SelfImprov />
      <Rating />
      <Start />
      <WorkWithUs />
    </div>
  );
}
