import React from 'react';
import { Button } from '@material-tailwind/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function VolunteerWithUs() {
    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controlsText.start('visible');
            controlsImage.start('visible');
        }
    }, [controlsText, controlsImage, inView]);

    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-10 px-4 md:px-8 lg:px-8 xl:px-16 backdrop-filter: blur(5px) bg-white bg-opacity-70">
            <div className="max-w-full w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row-reverse justify-between items-center">

                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controlsText}
                    variants={fadeInFromRight}
                    className="mb-8 md:mb-0 md:w-2/5 md:ml-8"
                >
                    <h2 className="text-gray-900 text-3xl font-bold font-dela-gothic mb-4">Volunteer With Us</h2>
                    <p className="text-blue-gray-900 text-xl font-semibold mb-8 max-w-lg">
                        As a non-profit organization, we award volunteer hours to those who contribute to open-source projects. We also distribute the President's Volunteer Service Award, a highly recognized award for volunteers.
                    </p>
                    <a href='/join'>
                    <Button 
                        size="lg"
                        ripple="light"
                        className="transition-all duration-300 ease-in-out shadow-md bg-calcommit-orange text-white font-dm-sans text-lg border-2 border-transparent capitalize hover:scale-105 hover:-rotate-6 hover:bg-white hover:border-calcommit-orange hover:text-black"
                    >
                        Join Now
                    </Button></a>
                </motion.div>

                <motion.div 
                    className="md:w-2/5"
                    initial="hidden"
                    animate={controlsImage}
                    variants={fadeInFromLeft}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <img src="polarbear.png" alt="Volunteers Image" className="rounded-md shadow-lg w-full h-auto" />
                </motion.div>

            </div>
        </div>
    );
}

export default VolunteerWithUs;
