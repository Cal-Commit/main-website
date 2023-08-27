import React from 'react';
import { Button } from '@material-tailwind/react';
import logo from '../static/img/Cal Commit Logo.svg';  

function Hero() {
    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 w-full h-screen flex flex-col justify-center">
            <div className="container mx-auto text-center">
                <img src={logo} alt="Cal Commit" className=" bg-gray-100 h-32 w-auto mx-auto mb-8 rounded-full shadow-lg" />

                <h1 className="text-gray-900 text-4xl font-bold font-dela-gothic mb-4">
                    Cal Commit
                </h1>
                
                <p className="text-blue-gray-900 text-xl font-semibold mb-8">
                    Teaching Students the World of <b>Collaboration</b>
                </p>

                
            </div>
        </div>
    );
}

export default Hero;
