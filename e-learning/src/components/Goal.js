import notes from "./assets/icons/notes.svg";
import bookClosed from "./assets/icons/book-closed.svg";
import weights from "./assets/icons/weights.svg";
import alert from "./assets/icons/alert.svg";

const Goals = () => {
  return (
    <section className="grid gap-8 p-3 bg-white-97 rounded-regular">
      <article>
        <h3 className="mb-4 text-2xl font-medium leading-6 underline text-grey-20 decoration-wavy decoration-orange-90">
          Our Goals
        </h3>
        <p className="text-sm leading-6 text-grey-35">
          At Skill Ninja, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.Through our carefully crafted courses, we aim to
        </p>
      </article>
      <article className="grid gap-4 md:grid-cols-2">
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={notes}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Provide Practical Skills</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            We incorporate real-world simulations into our courses to give
            learners a taste of actual cybersecurity threats and incidents.
            These simulations mimic real cyber attacks and defenses, allowing
            users to apply their knowledge and develop problem-solving skills in
            a realistic context. This practical exposure is crucial for building
            confidence and competence in handling cybersecurity issues. Our
            platform features interactive labs that simulate real-world
            cybersecurity environments. These labs provide learners with the
            opportunity to practice and refine their skills in a safe,
            controlled setting. Users can experiment with various tools and
            techniques, gaining valuable hands-on experience that prepares them
            for real-world challenges.
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={bookClosed}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Foster Creative Problem-Solving</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            We use scenario-based learning to present learners with complex,
            real-world cybersecurity problems. These scenarios require learners
            to think critically and develop creative solutions. By working
            through these realistic challenges, users enhance their ability to
            approach problems from multiple angles and devise effective
            strategies. We provide learners with access to the latest
            cybersecurity tools and technologies. Familiarity with these tools
            enables learners to experiment and innovate in their approach to
            security. By staying updated with current technologies, learners can
            apply the most effective and creative solutions to emerging threats.
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={weights}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">
            Promote Collaboration and Community
          </p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            We provide interactive forums and discussion boards where learners
            can ask questions, share knowledge, and discuss cybersecurity
            topics. These platforms enable users to connect with peers, exchange
            ideas, and seek advice, fostering a sense of community and
            collective learning. Our platform includes group projects that
            require learners to work together to solve cybersecurity challenges.
            These collaborative assignments encourage teamwork, communication,
            and the sharing of diverse perspectives. By working in teams,
            learners can leverage each other’s strengths and develop stronger
            problem-solving skills.
          </p>
        </div>
        <div className="grid p-8 border border-white-95 rounded-regular">
          <figure>
            <img
              src={alert}
              alt=""
              className="p-3 border border-orange-90 bg-orange-97 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Stay Ahead of the Curve</p>
          <p className="bg-white-97 rounded-regular md:flex md:items-center md:justify-between">
            We emphasize hands-on experience through labs, simulations, and
            real-world projects. This practical approach ensures that learners
            can apply their knowledge in real scenarios, keeping their skills
            sharp and relevant. Hands-on training is vital for understanding and
            responding to current cybersecurity threats Our platform is
            committed to research and development, continuously exploring new
            methodologies and technologies in cybersecurity education. This
            commitment ensures that our learners have access to innovative
            training approaches and cutting-edge content that prepares them for
            future challenges.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Goals;
