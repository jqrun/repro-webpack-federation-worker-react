import React from 'react';

self.onmessage = (event) => {
  console.log('worker.js onMessage', event);
  console.log('Test React', React.isValidElement({}));
};
