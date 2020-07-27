import React, {useRef} from 'react';
import {handleSort, handleRemove} from './controller_helpers.jsx';
import '../github_animations.scss';

let controls = [],
  isActive = [],
  inQuery = [];

let box = {
  height: '32%',
  width: '32%',
  borderRadius: '6px',
  border: 'none',
  background: '#c8e1ff',
  margin: '2px',
  cursor: 'pointer',
};

const makeControls = () => {
  for (let i = 1; i <= 9; i++) {
    controls.push({act_status: false});
  }
  return controls;
};

makeControls(); //build array

const ControlPanel = (props) => {
  const status = useRef([]);

  const handleClick = (cont, i) => {
    if (isActive.includes(i)) {
      /**
       *
       * IF ITEM CLICKED IS ALREADY ACTIVE
       *
       *   😄 Remove item from active array
       *   😄 Set background color
       *
       */
      handleRemove(isActive, i);
      status.current[i].style.background = '#c8e1ff';
    } else if (isActive.length < 3 && controls[i].act_status === false) {
      /**
       *
       * IF ITEM CLICKED IS TURNING ACTIVE AND ACTIVE ARRAY IS LESS THAN 3
       *
       *   😄 Push item to active array, then bubble sort active array
       *   😄 Set background color
       *
       */
      isActive.push(i);
      handleSort(isActive);
      status.current[i].style.background = '#79b8ff';
    }

    controls[i].act_status = !cont; // toggle boolean

    inQuery = []; // empty previous

    isActive.map((i) => inQuery.push(`${i}`));
    props.handleData(inQuery.toString());
  };

  return (
    <div style={{margin: '0 40px', width: '100%', height: '450px'}}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%',
        }}>
        {controls.map((control, i) => (
          <button
            className={'hover-grow'}
            ref={(ref) => (status.current[i] = ref)}
            type={'button'}
            style={box}
            key={i}
            act_status={control.act_status}
            onClick={() => handleClick(control, i)}></button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
