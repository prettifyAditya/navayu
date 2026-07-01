import Image from "next/image";
import Link from "next/link";

const Signature = () => {
  return (
    <section className="home-secD">
      <video src="/video/abstract.mp4" loop muted autoPlay playsInline></video>
      <div className="content">
        <div className="left">
          <h2>Unlock your Prime, with Metabolic Signature</h2>
        </div>
        <div className="right">
          <p>
            Our advanced wellness assessment combines biomarkers, health
            insights, and lifestyle analysis to understand how your body
            performs—helping optimize health, energy, and long-term wellbeing.
          </p>
          <Link className="btn btn-white" href="">
            Read More
            <Image
              src="/icon/arrow-external.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signature;
