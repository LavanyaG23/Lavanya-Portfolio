
import { motion } from "framer-motion";
//import ReactDOM from 'react-dom';
import React from 'react'; 
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { connect } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
//import React, { Component } from 'react';
//import {Animate} from "../components";
//import ParticleEffectButton from 'react-particle-effect-button';




const ConnectCard = ({
  name,
  icon,
  link,
}) => {
  return (

      <motion.div variants={fadeIn("up", "spring", name * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
                
          <div className=' inset-0 flex justify-end bg-purple-900 m-3 card-img_hover'>
            <div
                onClick={() => window.open(link, "_blank")}
                className=' w-20 h-20  flex justify-center bg-center scale-100 items-center cursor-pointer'
              >

                <img
                src={icon}
                alt='logo'
                className='w-20 h-20 object-contain'
                
               />   
                
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
} ;


const Connect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>To know more about me</p>
        <h2 className={`${styles.sectionHeadText}`}>Let's Connect.</h2>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {connect.map((connects, name) => (
          <ConnectCard key={`connects-${name}`} name={name} {...connects} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Connect, "connect");