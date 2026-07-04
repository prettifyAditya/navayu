import Image from "next/image";
import Button from "../../atoms/Button";

export default function TreatmentOptions() {
  return (
    <section>
      <div className="treatment_options sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>AVN Treatement Options</h2>
          </div>
          <div className="main_wrapper">
            <div className="option_col">
              <div className="icon">
                <Image
                  src="/image/treatment/option1.svg"
                  alt="treatment-options"
                  width={63}
                  height={63}
                />
              </div>
              <div className="content">
                <h3>NON SURGICAL</h3>
                <h6>Recommended by IAOS</h6>
                <ul>
                  <li>Hip Arthrodiastasis + DSCB Injection</li>
                  <li>Ozone Blood Therapy</li>
                  <li>Medicine Mukherjee Regimen</li>
                </ul>
              </div>
            </div>
            <div className="option_col">
              <div className="icon">
                <Image
                  src="/image/treatment/option2.svg"
                  alt="treatment-options"
                  width={63}
                  height={63}
                />
              </div>
              <div className="content">
                <h3>SURGICAL</h3>
                <ul>
                  <li>Total Hip Replacement</li>
                  <li>Core Decompression</li>
                  <li>Bone Graft</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn_wrap">
            <Button variant="btn-gradient-b">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
