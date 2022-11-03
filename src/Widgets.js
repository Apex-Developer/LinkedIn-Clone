import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@material-ui/icons'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Coronavrius: UK update s", "Top news - 2532 readers")}
            {newsArticle("PAPA React is back", "Top news - 9999 readers")}
            {newsArticle("Tesla hits new hights", "Cars & auto - 340 readers")}
            {newsArticle("Is Redus too good?", "Crypto - 130 readers")}
            {newsArticle("Redux lunched coursess?", "Crypto - 4232 readers")}
        </div>
    )
}

export default Widgets