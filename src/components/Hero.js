import React from 'react';
import { Button } from '@material-tailwind/react';
import logo from '../static/img/Cal Commit Logo.svg';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

const slideUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } }
};

function Hero() {
    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 w-full h-screen flex flex-col justify-center">
            <div className="container mx-auto text-center">

                <motion.img 
                    src={logo} 
                    alt="Cal Commit" 
                    className="bg-gray-100 h-64 w-auto mx-auto  mt-4 rounded-full shadow-lg" 
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                />

                <motion.h1 
                    className="text-gray-900 text-8xl font-bold font-dela-gothic mb-12"
                    variants={slideUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                >
                    Cal Commit
                </motion.h1>
                
                <motion.p 
                    className="text-blue-gray-900 text-3xl font-semibold mb-12" 
                    variants={slideUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    Teaching Students the World of <b>Collaboration</b>
                </motion.p>

            </div>
        </div>
    );
}

export default Hero;
