import React from 'react';
import { LoadWorker } from './LoadWorker';

export default function SayHelloFromA() {
  return (
    <>
      <h1>Hello from Application A!</h1>
      <LoadWorker />
    </>
  );
}
