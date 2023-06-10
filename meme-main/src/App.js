import App from './App.css';
import { useEffect } from 'react';
import React, { useState } from 'react';

function MemeGenerator() {
  const [memeImg, setMemeImg] = useState('https://i.imgur.com/4gxjJwN.jpg');
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemeImgs(data.data.memes))
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemeImgs.length);
    const randomMemeImg = allMemeImgs[randomNum].url;
    setMemeImg(randomMemeImg);
  }

  return (
    <div>
      <div className='head'>
        <h1>Meme Generator</h1>
        </div>
      <div className="meme">
        <img className="img" src={memeImg} alt="meme"/>
      </div>
      <form onSubmit={handleSubmit}>
        <button className="next">Next</button>
      </form>
    
    </div>
  )
}

export default MemeGenerator;