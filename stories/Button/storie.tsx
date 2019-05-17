import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from '../../src/Button';
import * as ButtonReadme from './README.md';

storiesOf('Button', module)
  .add('with background', () => <Button bg="palegoldenrod" onClick={() => { console.log('click!') }}> Hello world </Button>, {
    readme: {
      content: ButtonReadme
    }
  })