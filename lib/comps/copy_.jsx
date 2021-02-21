import React from 'react';
import moment from 'moment';
//libs
import {STORE} from '../lib/STORE';
//comps
import Code from './code_';
import '../styles/copy.css';

// prettier-ignore
const Copy = (props) => {
  const moments = moment().format('llll');
  const keys = Object.keys(STORE);

  if (keys.includes(props.data)) {
    const print = `<style>

/** -------------------------------------
 * Generated on ${moments}
 * by Learn Flexbox under the MIT license 
 ** -------------------------------------*/

${STORE[props.data].css}
            
</style>
  
${STORE[props.data].html}`;


    return (
      <div className={'codeblock'}>
        <Code print={print}/>
      </div>
    );
  } else {
    return (
      <div className={'codeblock empty'}>
        {'Try clicking above!'}
      </div>
    );
  }
};

export default Copy;
