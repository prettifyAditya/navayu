import Link from "next/link";

const Overview = () => {
  return (
    <section className="home-secC">
      <div className="container">
        <div className="row">
          <div className="left">
            <h6>About Navayu</h6>
            <h2>
              Navayu is not where your treatment ends. It’s where your new life
              begins.
            </h2>
            <ul className="stat">
              {statistics?.map(({ count, title }, index) => {
                return (
                  <li key={index} className="item">
                    <h4>{count}</h4>
                    <p>{title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="middle">
            <video
              src="/video/home-banner.mp4"
              poster="/video/home-banner.png"
              playsInline
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="right">
            <p>
              At Navayu , we believe that health is not merely the absence of
              disease, but the presence of balance, resilience, and vitality. In
              a rapidly evolving world shaped by stress, technology, and
              lifestyle challenges, we redefine healthcare by addressing the
              root causes of illness and restoring harmony within the body
            </p>
            <Link href="#" className="btn btn-gradient-b">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

const statistics = [
  {
    count: "20+",
    title: "Years of excellence",
  },
  {
    count: "15000+",
    title: "Patient Treated ",
  },
  {
    count: "200+",
    title: "Doctors in India",
  },
];
