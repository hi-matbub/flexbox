import React, {useState, useRef, useEffect} from 'react';
import {STORE} from '../lib/STORE';
import {ArrowRightIcon, ClippyIcon} from '@primer/octicons-react';
import moment from 'moment';
// comps
import ControlPanel from '../comps/controller/controller_';
// styles
import '../styles/github_animations.scss';
import '../styles/page-queries.css';
import '../styles/animistas.css';

const defaults = {
  width: '100%',
  height: '450px',
  display: 'flex',
  margin: '0 40px',
  flexDirection: 'column',
  background: '#eee',
  overflowY: 'scroll',
  position: 'relative',
};

const CodeBlock = (props) => {
  return (
    <pre style={{padding: '20px'}}>
      <code style={{font: 'monospace'}}>{props.content}</code>
    </pre>
  );
};
/*
*
*
* 🚨 ON HOLD
*
*
*
const Tooltip = (props) => {
  return (
    <small
      ref={props.ref}
      className={
        props.clipped === true
          ? 'border rounded-0 p-1 slide-in-right'
          : 'border rounded-0 p-1 slide-out-left'
      }
      style={{background: '#f6f8fa'}}>
      {'Copied to clipboard!'}
    </small>
  );
};

const Clipboard = (props) => {
  const [clipped, setClipped] = useState(false);
  const tooltipRef = useRef();

  const handleTooltip = () => {
    setClipped(!clipped);
    setTimeout(() => {
      setClipped(!clipped);
    }, 3000);
  };

  return (
    <div
      style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}>
      {clipped === true ? <Tooltip ref={tooltipRef} /> : null}
      <button
        onClick={handleTooltip}
        className={'btn hover-grow mb-2'}
        style={{width: 'fit-content', alignSelf: 'flex-end'}}
        aria-label="Clippy icon">
        <ClippyIcon size={22} />
      </button>
    </div>
  );
};
*/

// prettier-ignore
const Copy = (props) => {
  let moments = moment().format('llll');
  const keys = Object.keys(STORE);
  if (keys.includes(props.data)) {
    return (
      <section style={defaults}>
        {/* <Clipboard /> */}
        {/**
         *
         *
         *  🚨 Strange spacing is due to the pre and code blocks.
         *
         *
         *  */}
        <pre style={{padding: '20px'}}>
          <code style={{font: 'monospace'}}>
            {`<style>

/** ------------------------------------------
 * Generated on ${moments}
 * by Flexbox-generator under the MIT license 
 ** ------------------------------------------*/

`}
            {STORE[props.data].css + ` 
            
`}
            {`</style>

`}
            {STORE[props.data].html}
          </code>
        </pre>
      </section>
    );
  } else {
    return (
      <section style={defaults} className="blankslate">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <div
            className="hover-grow"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <h2 style={{fontFamily: '"Rubik", sans-serif'}}>Try me!</h2>
            <ArrowRightIcon size={60} />
          </div>
        </div>
      </section>
    );
  }
};

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <main style={{width: '100%'}}>
      <div style={{display: 'flex'}}>
        <Copy data={data} />
        <ControlPanel handleData={(i) => setData(i)} />
      </div>
    </main>
  );
};

export default Demo;