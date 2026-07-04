import "@/uploads/sass/treatment/treatment.css";
import TreatmentHero from "./TreatmentHero";
import AboutTreatment from "./AboutTreatment";
import Symptoms from "./Symptoms";
import TreatmentOptions from "./TreatmentOptions";
import WhyChooseUs from "./WhyChooseUs";

export default function TreatmentDetailsPage() {
  return (
    <main>
      <TreatmentHero />
      <AboutTreatment />
      <Symptoms />
      <TreatmentOptions />
      <WhyChooseUs />
    </main>
  );
}
