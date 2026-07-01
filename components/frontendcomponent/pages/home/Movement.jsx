import Image from "next/image";
import Link from "next/link";

const Movement = () => {
  return (
    <section className="home-secB">
      <div className="left">
        <h2>Movement is your 1st step</h2>
        <p>
          Movement is the foundation of lasting health. Our personalized
          wellness programs focus on strength, mobility, balance, and resilience
          through proactive, expert-led care tailored to your lifestyle and
          goals.
        </p>

        <Link href="" className="btn btn-white">
          <Image src="/icon/stethoscope.svg" alt="stethoscope" width={20} height={20} />
          Book a Consultation 
          </Link>
      </div>
      <div className="right">
        <Image src="/image/home/run.png" alt="run" width={1200} height={1200} />
      </div>
    </section>
  );
};

export default Movement;
