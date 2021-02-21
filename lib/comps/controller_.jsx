import React, {useRef} from 'react';
import {handleSort} from './helpers/handleSort.jsx';
import {handleRemove} from './helpers/handleRemove.jsx';
import '../styles/controller.css';

const controls = [];
const isActive = [];
let inQuery = [];

const box = {
  borderRadius: '6px',
  border: 'none',
  margin: '2px',
  cursor: 'pointer',
  background: '#c8c8c8',
};

const makeControls = () => {
  for (let i = 1; i <= 9; i++) {
    controls.push({act_status: false});
  }
  return controls;
};

makeControls(); //build array

const Controller = (props) => {
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
      status.current[i].style.background = '#c8c8c8';
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
      status.current[i].style.background = '#C8D6FA';
    }

    controls[i].act_status = !cont; // toggle boolean

    inQuery = []; // empty previous

    isActive.map((i) => inQuery.push(`${i}`));
    props.handleData(inQuery.toString());
  };

  return (
    <div className={'control'}>
      {controls.map((control, i) => (
        <button
          className={'control_switch'}
          ref={(ref) => (status.current[i] = ref)}
          type={'button'}
          style={box}
          key={i}
          act_status={control.act_status}
          onClick={() => handleClick(control, i)}></button>
      ))}
    </div>
  );
};

export default Controller;
