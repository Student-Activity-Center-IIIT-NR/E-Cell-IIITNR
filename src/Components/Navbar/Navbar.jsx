import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
const drawerWidth = 240;
const navItems = ["Home", "About", "Event", "E-Summit", "Gallery"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <ListItem>
          <ListItemButton href="#homePage">Home</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="#about">About</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="#event">Event</ListItemButton>
        </ListItem>
        <Link to="/esummit">
          <ListItem>
            <ListItemButton>E-Summit</ListItemButton>
          </ListItem>
        </Link>
        <Link to="/team">
          <ListItem>
            <ListItemButton>Team</ListItemButton>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemButton href="#gallery">Gallery</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ background: "transparent", boxShadow: "0", display: "flex" }}
      >
        <Toolbar>
          <div className="icon">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              anchor="right"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "#0803FF",
                fontSize: "2.5rem",
                padding: "12px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#3C7EFF",
                },
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                ></div>
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                ></div>
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                ></div>
              </div>
            </IconButton>
          </div>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              },
              margin: "auto",
              borderWidth: "0.07rem",
              borderStyle: "solid",
              borderColor: "#93B7FF",
              background: "#1D0A00",
              borderRadius: "1.7rem",
              fontWeight: "500",
              padding: "1vh",
              marginTop: "3vh",
            }}
          >
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "white",fontFamily:"Montserrat"}}>
                {item}
              </Button>
            ))} */}
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                listStyle: "none",
                gap: "1.5vh",
                margin: "1vh",
              }}
              className="nav-list"
            >
              <a href="#homePage">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#event">
                <li>Event</li>
              </a>
              <NavLink to="/esummit">
                <li>E-Summit</li>
              </NavLink>
              <NavLink to="/team">
                <li>Team</li>
              </NavLink>
              <a href="#gallery">
                <li>Gallery</li>
              </a>
            </ul>
            <a href="#contact">
              <div className="contact">
                <div>Contact Us</div>
              </div>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              zIndex: 10001,
            },
            zIndex: 10001,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
