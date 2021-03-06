import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {NavLink} from 'react-router-dom'




const Header = () => {
    return (
        <AppBar position="static"   style={{padding: '15px 0', color:'#4A4A4A',background:'white',width:'100%', fontSize: ".8rem"}}>
        <Toolbar>
          <IconButton edge="start" style={{ marginRight:'2%'}} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow: 1}}>
          Permisson.ly
          </Typography>


 <NavLink to='/' style={{color:'inherit' , textDecoration:'none'}} >
          <Button color="inherit">
         Home
          </Button>

</NavLink>


<NavLink to='/about_Us' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">About Us</Button>
</NavLink>

<NavLink to='/field-trip' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">Add Field Trip</Button>
</NavLink>


<NavLink to='/teacher/trip' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">View Field Trips</Button>
</NavLink>

<NavLink to='/admin' style={{color:'inherit' , textDecoration:'none'}}>
          <Button color="inherit">Add Student</Button>
</NavLink>

        </Toolbar>
      </AppBar>
    );
};

export default Header;