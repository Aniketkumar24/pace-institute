import react from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <img
          src="./img/pratap_manish.png"
          alt="Pratap Manish"
          className="hero-img"
        />
        <div className="hero-text">
          <p>
            The literal meaning of "PACE" is "Someone’s step by step consistent
            growth in a direction and making required changes in their
            position".
          </p>
          <p>Pace is the no.1 institute</p>
          <p>
            PACE Institute has mentored thousands of successful students in
            multiple disciplines. Quality education is necessary in multiple
            spheres of life. PACE has helped aspiring people and candidates to
            grab their dream positions since its inception in 2004. Students
            preparing for officer rank positions and entrance to top colleges
            need command over their knowledge.
          </p>
          <p>
            PACE is a registered Institute under the ministry of corporate
            affairs to impart different type of supplementary education and
            training. It is popularly known for its global quality and it has
            been imparting quality education to different aspiring candidates
            for different competitive examination with Personality Development.
          </p>
        </div>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <section className="services-section">
        <div className="section-heading">
          <h1 className="title">Our Services</h1>
        </div>
        <div className="services">
          <ol className="services-list">
            <li className="services-list-item">
              <p className="services-name">School of English:</p>
              <p className="services-text">
                PACE imparts training of English language and personality
                development to all levels and age groups. It helps aspirants to
                face exams like IELTS, CAT, SSC, SBI-PO, IBPS, Air-Force, NDA,
                UPSC, BPSC, etc.
              </p>
              <a href="#" className="btn primary-btn">
                Read more
              </a>
            </li>
            <li className="services-list-item">
              <p className="services-name">Pace Commerce Academy:</p>
              <p className="services-text">
                for students of class 11 & 12. Subjects like Accounts, Economics
                and Business studies are part of it.
              </p>
              <a href="#" className="btn primary-btn">
                Read more
              </a>
            </li>
            <li className="services-list-item">
              <p className="services-name">Pace IIT & Medical:</p>
              <p className="services-text">
                for students aiming to qualify IIT, Engineering entrance tests,
                and NEET. Tutorials and foundation classes starts from class 6
                onwards and mainly advance course for students preparing for IIT
                & NEET
              </p>
              <a href="#" className="btn primary-btn">
                Read more
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
