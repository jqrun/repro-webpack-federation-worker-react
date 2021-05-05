import React, { useEffect } from 'react';

export const LoadWorker = () => {
  useEffect(() => {
    const worker = new Worker(new URL('./worker', import.meta.url));
    console.log('Worker loaded: ', worker);
    worker.postMessage('hello worker');
  }, []);

  return <div>Hello Worker!</div>;
};
