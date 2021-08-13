import React, { useState } from 'react';
import axios from 'axios';
import "materialize-css/dist/css/materialize.min.css";
import { Button } from 'react-materialize';

const GifApp = () => {
    const mystyle = {
        backgroundImage: `url(https://media1.giphy.com/media/348eWDTPanRrtexmXB/giphy.gif?cid=6105270095f2210dde1e0773ef1b7aefbeb27c9a84cff7dc&rid=giphy.gif&ct=g)`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        minWidth: `300px`,
        minHeight: `300px`
        
    };
    const apiKey = `URLjL49KyzdscasPa5146vq3CmpIYQjq`;
    const endpointRandom = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    const setGifRandom = () => {
        axios.get(endpointRandom)
            .then(({ data : { data : { images : { original } } } }) => {
                console.log(`Imagen Gif devuelta por API GIPHY \n`, original.url) 
                // mystyle.backgroundImage = `url(https://ichef.bbci.co.uk/news/976/cpsprodpb/8C93/production/_119778953_gettyimages-1045060324.jpg)`;
                
            })
            .catch((err)=>{
                console.warn(`No pudo cargarse el gif`, err);
            })
    };

    return (
        <>
            <Button onClick = { setGifRandom } > Cargar GIF </Button>
            <div id="imgDiv" style={ mystyle }></div>
        </>
    );
}

export default GifApp;