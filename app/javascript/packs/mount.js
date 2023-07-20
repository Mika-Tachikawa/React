import React from 'react';
import { createRoot } from 'react-dom/client';
import Top from './react'

const mount = (Component, mountNodeId) => {
  document.addEventListener('turbolinks:load', () => {
    const mountNode = document.getElementById(mountNodeId);
    const propsJSON = mountNode.getAttribute('data-react-props');
    const props = JSON.parse(propsJSON);
    const root = createRoot(mountNode);
    root.render(<Component {...props} />);
  })
}

mount(Top, 'top');