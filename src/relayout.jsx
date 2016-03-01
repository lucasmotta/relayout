import React from 'react';

import classes from './utils/classes';
import layoutItemType from './utils/props/relayout-item-type';


const propTypes = {
  gutter: React.PropTypes.bool,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  valign: React.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
  className: React.PropTypes.string,
  children: layoutItemType,
};

const defaultProps = {
  gutter: true,
};

const Relayout = (props) => {
  const className = classes('relayout', props, {
    gutter: 'gutter',
    align: props.align,
    valign: props.valign,
  }, props.className);

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Relayout.propTypes = propTypes;
Relayout.defaultProps = defaultProps;

export default Relayout;
