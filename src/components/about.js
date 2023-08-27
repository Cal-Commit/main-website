import React from 'react';
import { Button } from '@material-tailwind/react';

function AboutUs() {
    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-20 px-4 md:px-8 lg:px-8 xl:px-16 backdrop-filter: blur(5px) bg-white bg-opacity-70">
            <div className="max-w-full w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
                
                <div className="mb-8 md:mb-0 md:w-2/5 md:mr-8">
                    <h2 className="text-gray-900 text-3xl font-bold font-dela-gothic mb-4">About Us</h2>
                    <p className="text-blue-gray-900 text-xl font-semibold mb-8 max-w-lg">
                        Our mission is to equip computer science students with the skills and tools for successful collaboration and software development through participation in open-source projects, training in version control software, and competitions.
                    </p>
                    <Button 
                        size="lg"
                        ripple="light"
                        className="transition-all duration-300 ease-in-out shadow-md bg-calcommit-orange text-white font-dm-sans text-lg border-2 border-transparent capitalize hover:scale-105 hover:-rotate-6 hover:bg-white hover:border-calcommit-orange hover:text-black"
                    >
                        Learn More
                    </Button>
                </div>
                
                <div className="transform hover:scale-105 transition-transform duration-300 md:w-2/5">
                    <img src="bears.png" alt="About Image" className="rounded-md shadow-lg w-full h-auto" />
                </div>
                
            </div>
        </div>
    );
}

export default AboutUs;
