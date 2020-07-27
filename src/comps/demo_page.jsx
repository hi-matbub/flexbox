import React, {useState, useRef, useEffect} from 'react';
import ControlPanel from './controller/controller_';
import './page-queries.css';
import {STORE} from './lib/STORE';
import {ArrowRightIcon, ClippyIcon} from '@primer/octicons-react';
import './github_animations.scss';
import './animistas.css';

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

const Tooltip = (props) => {
  return (
    <small
      ref={props.ref}
      className="border rounded-0 p-1 slide-in-right"
      style={{background: '#f6f8fa'}}>
      {'Copied to clipboard!'}
    </small>
  );
};

const Clipboard = (props) => {
  const [clipped, setClipped] = useState(false);
  const tooltipRef = useRef();

  useEffect(() => {
    console.log(tooltipRef.current);
  });

  const handleTooltip = () => {
    setClipped(!clipped);
    setTimeout(() => {}, 3000);
    console.log(clipped);
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

const Copy = (props) => {
  const keys = Object.keys(STORE);
  if (keys.includes(props.data)) {
    return (
      <section style={defaults}>
        <Clipboard />
        <div style={{display: 'flex', height: '60%'}}>
          <CodeBlock language={'css'} content={STORE[props.data].css} />
        </div>
        <div style={{display: 'flex', height: '40%'}}>
          <CodeBlock language={'html'} content={STORE[props.data].html} />
        </div>
      </section>
    );
  } else {
    return (
      <section style={defaults}>
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
      <section style={{padding: '40px'}}>
        <p>
          Flexbox can be confusing. Let this guide help you master the ways of
          flexbox in the most <i>pratical</i> approach possible.
        </p>
      </section>
      <div style={{display: 'flex'}}>
        <Copy data={data} />
        <ControlPanel handleData={(i) => setData(i)} />
      </div>
    </main>
  );
};

export default Demo;
