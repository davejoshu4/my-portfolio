import React from "react";
import myImg from '../assets/pfp.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 py-16 bg-white">
      
      {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={myImg}
          alt="Joshua Dave Gallares"
          className="w-94 h-94 object-cover border-7 border-stone-900 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center mr-10 md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          About Me
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Hi! I'm <span className="font-semibold text-stone-800">Joshua Dave Gallares</span>, 
          an aspiring Frontend Developer passionate about crafting seamless,
          modern web interfaces that blend creativity with functionality.
          I love transforming ideas into interactive, 
          visually striking experiences that not only look beautiful but also feel intuitive to navigate.
          My design philosophy centers around simplicity, responsiveness, 
          and accessibility ensuring every user enjoys a smooth and engaging experience across all devices.
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
         Using tools like React, JavaScript, and Tailwind CSS, I build fast, dynamic, and responsive 
         websites that bring ideas to life. Constantly learning and refining my craft,
          I strive to turn complex challenges into elegant, meaningful solutions through creativity and precision.
        </p>

        {/* Highlights Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          {[
            { title: "Frontend Dev", desc: "Skilled in React, Tailwind CSS, and modern UI principles." },
            { title: "Responsive Design", desc: "Creating layouts that work on all devices." },
            { title: "Creative Coding", desc: "Blending creativity with technical skills for unique solutions." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-neutral-900 p-4 rounded-lg shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-white "
                style={{ fontFamily: 'satoshi-bold' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-white mt-2"
                style={{ fontFamily: 'satoshi-medium' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
