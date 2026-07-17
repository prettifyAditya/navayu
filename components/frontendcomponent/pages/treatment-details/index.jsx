import "@/uploads/sass/treatment/treatment.css";
import TreatmentHero from "./TreatmentHero";
import AboutTreatment from "./AboutTreatment";
import Symptoms from "./Symptoms";
import TreatmentOptions from "./TreatmentOptions";
import WhyChooseUs from "./WhyChooseUs";
import OurTeam from "../../organisms/OurTeam";
import TreatmentForm from "./TreatmentForm";
import RelatedServices from "./RelatedServices";
import TreatmentProtocol from "./TreatmentProtocol";
import Benefits from "./Benefits";

export default function TreatmentDetailsPage() {
  return (
    <main>
      <TreatmentHero />
      <AboutTreatment />
      <Symptoms />
      <TreatmentProtocol />
      <Benefits />
      <TreatmentOptions />
      <WhyChooseUs />
      <OurTeam />
      <TreatmentForm />
      <RelatedServices />
    </main>
  );
}
