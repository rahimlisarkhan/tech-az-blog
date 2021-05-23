import React from 'react'
import Events from './AboutUsChild/Event'
import Media from './AboutUsChild/Media'
import InterPartners from './AboutUsChild/InterPartners'
import LocalPartners from './AboutUsChild/LocalPartners'
import TeamMembers from './AboutUsChild/TeamMembers'
import AboutHeader from './AboutHeader'

const AboutUs = (props) =>{

    return(<>
        <AboutHeader/>
        <section className="home-page-content" >
            <Events/>
            <Media/>
            <InterPartners/>
            <LocalPartners/>
            <TeamMembers/>
        </section>
        </>
    )

}

export default AboutUs