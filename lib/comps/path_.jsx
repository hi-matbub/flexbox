import React from 'react';
import {Link} from 'react-router-dom';

const Path = (props) => {
  return (
    <Link
      to={props.path}
      style={{
        // prettier-ignore
        lineHeight: '28px',
        letterSpacing: '1px',
        color: props.color || '#000',
      }}>
      {' '}
      {props.name}
    </Link>
  );
};

export default Path;
