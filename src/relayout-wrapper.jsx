import React from 'react';

import classes from './utils/classes';


const propTypes = {
  className: React.PropTypes.string,
  from: React.PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  children: React.PropTypes.node,
};

const defaultProps = {
  from: 'sm',
};

const RelayoutWrapper = (props) => {
  const className = classes('relayout-wrapper', props, {
    from: `from-${props.from}`,
  }, props.className);

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

RelayoutWrapper.propTypes = propTypes;
RelayoutWrapper.defaultProps = defaultProps;

export default RelayoutWrapper;
