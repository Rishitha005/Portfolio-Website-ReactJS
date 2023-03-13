import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [setSuccessMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pd5tpuw', 'template_7jtskxi', form.current, '6TYGSn6f6rg_RIikw')
      .then((result) => {
        console.log(result.text);
        setShowSuccessMessage(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <form ref={form} onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input type="text" name="user_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your name' />
            <input type="email" name="user_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your email' />
            <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' />
            <input type="submit" value="Send a message" className='btn btn-lg'/>
            {showSuccessMessage && <p className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
