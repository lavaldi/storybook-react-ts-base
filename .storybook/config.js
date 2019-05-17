import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);

function loadStories() {
  const req = require.context('../stories', true, /storie/);
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);