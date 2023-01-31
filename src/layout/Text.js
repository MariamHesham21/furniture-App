import React from 'react'
import '../style/Text.css';

const Text = () => {
  return (
    <div className='Texthome'>
        <div className='homeheader'>
             <h1> Make Your Interior More Minimalistic & Modern </h1>
        </div>
        <div className='homepara'>
            <p> Turn your room with us into a lot more minimalist and modern with ease and speed</p>
        </div>
        <div className='homesearch'>
            <input type="search" placeholder=" search furniture" />
        </div>
    </div>
  )
}

export default Text