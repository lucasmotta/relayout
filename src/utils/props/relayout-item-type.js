import React from 'react';

export default function relayoutItemType(props, propName, componentName) {
  const childrenName = 'RelayoutItem';
  const prop = props[propName];
  let error = null;

  React.Children.forEach(prop, (child) => {
    if (child && child.type.name !== childrenName) {
      error = new Error(`${componentName} only accepts children of type "${childrenName}".`);
    }
  });

  return error;
}
