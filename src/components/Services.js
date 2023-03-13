import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

//services data
const services = [
  {
    name: 'Web Development',
    description: 'As a web developer, I am skilled in crafting visually stunning and engaging websites that offer a seamless user experience.',
    link: 'Learn more',
  },
  {
    name: 'UI/UX Design',
    description: 'As a UI/UX designer, I excel at creating visually appealing interfaces that enhance user engagement and satisfaction',
    link: 'Learn more',
  },
  {
    name: 'Mobile App Development',
    description: 'As a mobile app developer, I specialize in creating functional and user-friendly apps for both iOS and Android platforms.',
    link: 'Learn more',
  },
  {
    name: 'WordPress Development',
    description: 'With my skills in WordPress development, I am able to create custom-designed and functional websites.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and images*/}
          <motion.div 
          variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Passionate Undergraduate in Software Engineering and Front-End Development</h3>
            <a href='#work'><button className='btn btn-sm'>See my work</button></a>
          </motion.div>
          {/* services */}
          <motion.div 
          variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary 
                    font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
