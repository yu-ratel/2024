import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Card = () => {
  const [card, setCard] = useState(true);
  const [text, setText] = useState('');
  const [color, setColor] = useState('lightblue');

  const randomContents = () => {
    const contents = ['연애', '술자리', '날씨', '취미', '패션', '성격'];
    const randomIndex = Math.floor(Math.random() * contents.length);
    setText(contents[randomIndex]);
  }

  const textColor = () => {
    setColor('gray')
  }

  const change = () => {
    setCard(card);
    randomContents();
    textColor();
  };

  const iceStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `170px`,
    height: `200px`,
    border: 'none',
    borderRadius: `10px`, 
    backgroundColor: color,
    transition: 'background-color 0.5s ease-in-out',
  }

  return (
    <Transition in={card} timeout={300}>
      <div>
        <button style={{...iceStyle}} onClick={change}></button>
        <p style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',}}>{text}</p>
      </div>
    </Transition>
  );
}

export default Card;
