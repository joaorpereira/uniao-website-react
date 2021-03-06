import React from 'react'
import { Hero, Section, Subscribe, Stories, GamesSection} from "../../components"
import {homeObjOne, aboutObj, galeryObj, gamesObj, storyObj} from './homeData'

function Home() {
    return (
        <div className="page">
            <Hero {...homeObjOne}/>
            <Section {...aboutObj}/>
            <Section {...galeryObj}/>
            <GamesSection {...gamesObj}/>
            <Stories {...storyObj}/>
            <Subscribe/>
        </div>
    )
}

export default Home;
