import React from 'react';

function AboutLandingComp() {
    return (
        <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 backdrop-filter: blur(5px) bg-white bg-opacity-70">
            <div className="mt-16 sm:mt-12 md:mt-16 lg:mt-20 max-w-full w-11/12 sm:w-10/12 md:w-8/12 lg:w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
                
                <div className="mb-6 sm:mb-8 md:mb-0 mt-12 md:w-2/5 flex flex-col justify-center"> {/* Added flex flex-col justify-center */}
                    <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-dela-gothic mb-2 sm:mb-3 md:mb-4 lg:mb-4">The Mission Behind Cal Commit</h1>
                    <p className="text-blue-gray-900 text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-8 max-w-lg">
                        At Cal Commit, we believe in fostering an environment of learning, growth, and collaboration. Our mission is to empower students in the realm of computer science by providing them with opportunities to work on open-source projects, understand the nuances of version control, and most importantly, collaborate effectively in a diverse team setting.
                    </p>
                </div>
                
                <div className="transform hover:scale-105 transition-transform duration-300 md:w-2/4 flex-shrink-0"> {/* Added flex-shrink-0 */}
                    <img src="bearAbout.jpeg" alt="Mission Behind Cal Commit" className="rounded-md shadow-lg w-full h-auto" />
                </div>
                
            </div>
        </div>
    );
}

export default AboutLandingComp;
