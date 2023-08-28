import React from 'react';

function AboutLandingComp() {
    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-20 px-4 md:px-8 lg:px-8 xl:px-16 backdrop-filter: blur(5px) bg-white bg-opacity-70">
        <div className="max-w-full w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-8 md:mb-0 md:w-2/5">
                <h1 className="text-gray-900 text-5xl font-bold font-dela-gothic mb-4">The Mission Behind Cal Commit</h1>
                <p className="text-blue-gray-900 text-2xl font-semibold mb-8 max-w-lg">
                    At Cal Commit, we believe in fostering an environment of learning, growth, and collaboration. Our mission is to empower students in the realm of computer science by providing them with opportunities to work on open-source projects, understand the nuances of version control, and most importantly, collaborate effectively in a diverse team setting.
                </p>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300 md:w-3/5">
                <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p090xhqs.jpg" alt="Mission Behind Cal Commit" className="rounded-md shadow-lg w-full h-auto" />
            </div>
            
        </div>
    </div>
    );
}

export default AboutLandingComp;
