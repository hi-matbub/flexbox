import React from 'react';
import '../styles/code.css';

const Code = (props) => {
  return (
    <section className="code-wrapper">
      <pre>
        <code>{props.print}</code>
      </pre>
    </section>
  );
};

export default Code;
