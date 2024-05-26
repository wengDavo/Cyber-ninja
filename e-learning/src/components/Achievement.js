import crown from "./assets/icons/crown.svg";
import medal from "./assets/icons/medal.svg";
import twoMasks from "./assets/icons/two-masks.svg";
import boltShield from "./assets/icons/bolt-shield.svg";

const Achievements = () => {
  return (
    <section className="grid gap-8 p-3 bg-white-97 rounded-regular">
      <article>
        <h3 className="mb-4 text-2xl font-medium leading-6 underline text-grey-20 decoration-wavy decoration-orange-90">
          Achievements
        </h3>
        <p className="text-sm leading-6 text-grey-35">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </article>
      <article className="grid gap-4 md:grid-cols-2">
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={crown}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Trusted by Thousands</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            Our e-learning application for cybersecurity is trusted by thousands
            of learners and professionals around the world. We take pride in
            being the platform of choice for individuals and organizations
            seeking to enhance their cybersecurity knowledge and skills. Here
            are companies and institutions that rely on us: Fortune 500
            Companies sucha as IBM and CISCO, Educational Institutions,
            Government Agencies, Cyber-Security Firms such as Symantec, McAfee
            and Palo Alto
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={medal}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Award-Winning Courses</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies and we offer numerous certifications such as the
            Certified Information Securty Manager (CISM) certificate, Certified
            Information Systems Auditor (CISA) certificate, The Certified
            Informations Systems Security Proffessional (CISSP) certificate,
            Certified Cliuse Security Professionla (CCSP) certificate, CompTIA
            Security +, GIAC Security Essential (GSEC) and so much more .
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={twoMasks}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Positive Student Feedback</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials. Our commitment to providing high-quality education is
            reflected in the positive outcomes and feedback from our users. We
            continuously update our content, integrate new technologies, and
            seek input from industry experts to maintain the highest standards
            of excellence. This dedication ensures that our platform remains a
            leading resource for cybersecurity education. Join the many
            individuals and organizations who have experienced the
            transformative impact of our e-learning application. Enhance your
            cybersecurity knowledge, advance your career, and contribute to a
            safer digital world with our trusted platform.
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={boltShield}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Industry Partnerships</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            Our e-learning application for cybersecurity is built on strong
            partnerships with leading organizations in the cybersecurity
            industry. These collaborations ensure that our content is relevant,
            up-to-date, and meets the highest standards of excellence. Here are
            some of our key industry partners: The International Information
            System Security Certification Consortium, or (ISC)², is a global
            leader in cybersecurity certifications CompTIA is a leading provider
            of vendor-neutral IT certifications. ISACA is a global association
            that provides knowledge and certifications for information systems
            governance, control, security, and audit professionals. Cisco is a
            worldwide leader in IT and networking.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Achievements;