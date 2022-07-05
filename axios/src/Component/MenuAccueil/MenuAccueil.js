import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './MenuAccueil.scss';

export default function MenuAccueil() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className= "Button__Accueil" 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Wesh gros</MenuItem>
        <MenuItem onClick={handleClose}>Bien ou quoi ? </MenuItem>
        <MenuItem onClick={handleClose}>La famille ?  </MenuItem>
        <MenuItem onClick={handleClose}>Les enfants ?  </MenuItem>
        
      </Menu>
    </div>
  );
}
