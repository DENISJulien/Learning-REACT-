import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ColorSwitches() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
    </div>
  );
}