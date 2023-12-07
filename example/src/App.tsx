import React, { useState } from 'react';
import './App.css';

import { Wheel } from 'react-custom-roulette';

const data = [
  // { option: 'REACT' },
  // { option: 'Bullet' },
  // { option: 'Bullet' },

  // { option: 'Bullet' },

  {
    option: 'Royal enfield', style: { wordWrap: 'break-word' },
    image: { offsetX: 330, offsetY: 30, sizeMultiplier: 0.8, landscape: true, uri: 'https://res.cloudinary.com/dbmdtmpvk/image/upload/v1701846139/sqs7jif0xqs83skgstnb.png' }
  },
  { option: 'ROULETTE' },
  { option: 'ROULETTE' },
  // { option: 'ROULETTE' },
  { option: 'Roul' }
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 4;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 12;
const fontStyle = 'normal';
const textDistance = 60;
const spinDuration = 1.0;

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={2}
          // perpendicularText={true}
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className={'spin-button'} onClick={handleSpinClick}>
          SPIN
        </button>
      </header>
    </div>
  );
};

export default App;
