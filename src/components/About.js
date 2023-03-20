import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
//scroll
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onece: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ onece: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              Passionate Undergraduate in Software Engineering and Front-End
              Development
            </h3>
            <p className="mb-6">
              I am Rishitha Samarathunga, currently an undergraduate at Uva
              Wellassa University of Sri Lanka, pursuing my B.Sc. (Hons) in
              Industrial Information Technology.
            </p>
            <p className="mb-6">
              Software Engineering | Machine Learning | Mobile App Development |
              Front-End Development are my interesting areas of study.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Ongoing
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <button className="text-gradient btn-link">My Portfolio</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
