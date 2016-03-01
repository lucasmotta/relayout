import React from 'react';

import classes from './utils/get-classes';
import resetClasses from './utils/get-reset-classes';
import sizeType from './utils/props/size-type';


const propTypes = {
  sm: sizeType,
  md: sizeType,
  lg: sizeType,
  xl: sizeType,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  relative: React.PropTypes.bool,
};

const defaultProps = {
  sm: 12,
};

const RelayoutItem = (props) => {
  const name = 'relayout__item';
  const className = classes(name, props, {
    sm: props.sm,
    md: `${props.md}@md`,
    lg: `${props.lg}@lg`,
    xl: `${props.xl}@xl`,
    relative: 'relative',
  }, resetClasses(name, props), props.className);

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

RelayoutItem.propTypes = propTypes;
RelayoutItem.defaultProps = defaultProps;

export default RelayoutItem;
