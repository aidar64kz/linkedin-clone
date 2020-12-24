import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h3>{heading}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Good news", "Top news - 125 readers")}
            {newsArticle("Coronavirus cases", "Top news - 895 readers")}
            {newsArticle("GBad news", "Top news - 256 readers")}
            {newsArticle("Trump and Barak Obama friends 4ever", "Top news - 162 readers")}
            {newsArticle("Bitcoin price raised up", "Crypto news - 425 readers")}
            {newsArticle("BMW new model released", "Car/Auto news - 143 readers")}
        </div>
    )
}

export default Widgets
