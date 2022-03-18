import React from 'react';
import ImageGallery from 'react-image-gallery'

const CardArticle = () => {

    const imageList = [
        {
            original: 'https://cdn.discordapp.com/attachments/951073747211812974/951475960459427870/9e00122cc30587fad1d7c29eaeb02907.jpg'
        },
        {
            original: 'https://cdn.discordapp.com/attachments/951073747211812974/951786579230334986/panpan.png'
        },
        {
            original: 'https://cdn.discordapp.com/attachments/951073747211812974/951787098137051156/blaise.jpg'
        },
        {
            original: 'https://cdn.discordapp.com/attachments/951073747211812974/951787150989484102/creative1.jpg'
        }
    ]

    return (
        <div>
           <ImageGallery items={imageList}/>
        </div>
    );
};

export default CardArticle;