import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'Optimus' }}>
        E-Summit
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <NavLink to="/"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="E-Cell" />
            </ListItemButton></NavLink>
          </ListItem>

          <ListItem disablePadding>
            <a href="#esummitaboutus"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="About Us" />
            </ListItemButton></a>
          </ListItem>

          <ListItem disablePadding>
            <a href="#esummitevents"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="Events"/>
            </ListItemButton></a>
          </ListItem>

          <ListItem disablePadding>
            <a href="#epastspeakers"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus'}}>
              <ListItemText primary="Past Speakers" />
            </ListItemButton></a>
          </ListItem>

          <ListItem disablePadding>
            <NavLink to="/team"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="Team" />
            </ListItemButton></NavLink>
          </ListItem>

          <ListItem disablePadding>
            <a href="https://unstop.com/college-fests/e-summit-2025-international-institute-of-information-technology-iiit-naya-raipur-307942" target="_main"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="Register" />
            </ListItemButton></a>
          </ListItem>

          <ListItem disablePadding>
            <NavLink to="/cryptic"><ListItemButton sx={{ textAlign: 'center', fontFamily: 'Optimus' }}>
              <ListItemText primary="Cryptic Hunt"/>
            </ListItemButton></NavLink>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const navStyle = {
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Optimus',
    margin: '5px',
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow:"0" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, margin: 'auto' }}>
            <NavLink to="/"><Button sx={navStyle}>E-Cell</Button></NavLink>
            <a href="#esummitaboutus"><Button sx={navStyle}>About Us</Button></a>
            <a href="#esummitevents"><Button sx={navStyle}>Events</Button></a>
            <a href="#epastspeakers"><Button sx={navStyle}>Past Speakers</Button></a>
            <NavLink to="/team"><Button sx={navStyle}>Team</Button></NavLink>
            <NavLink to="/cryptic"><Button sx={navStyle}>Cryptic Hunt</Button></NavLink>
            <a target="_main" href="https://unstop.com/college-fests/e-summit-2025-international-institute-of-information-technology-iiit-naya-raipur-307942"><Button sx={navStyle}>Register</Button></a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;