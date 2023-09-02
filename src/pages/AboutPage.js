import React from "react";
import AboutLandingComp  from "../components/AboutLanding";
import OurTeam from "../components/OurTeam";
import OurEvents from "../components/Events";
function AboutPage() {
    return (
        <div>
            <AboutLandingComp />
            <OurTeam />
            <OurEvents />
        </div>
    )
}

export default AboutPage;