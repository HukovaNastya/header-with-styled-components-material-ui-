import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const HomeDrawer = styled(List)({
  background: '#F2F0FF', 
  boxShadow: 'none',
  width: '375px',
  height: "100vh",
  padding: '20px 20px',
});

const DrawerLinkStyle = styled(Link)({
    textDecoration: "none",
    color: "#0D0E43",
    fontSize: "24px",
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  });

  const DrawerIcon = styled(IconButton)({
    color: "#0D0E43",
    padding: '0px'
  });

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
         <HomeDrawer>
           <ListItem onClick={() => setOpenDrawer(false)}>
             <ListItemText>
               <DrawerLinkStyle to="/">
                 Hekto
               </DrawerLinkStyle>
            </ListItemText>
            </ListItem>
            <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <DrawerLinkStyle to="/">
                    Home
                  </DrawerLinkStyle>
                </ListItemText>
              </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <DrawerLinkStyle to="/">
                  Pages
                </DrawerLinkStyle>
              </ListItemText>
            </ListItem>
            <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <DrawerLinkStyle to="/">
                    Products
                  </DrawerLinkStyle>
                </ListItemText>
              </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <DrawerLinkStyle to="/">
                  Blog
                </DrawerLinkStyle>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <DrawerLinkStyle to="/">
                  Shop
                </DrawerLinkStyle>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <DrawerLinkStyle to="/">
                  Contact
                </DrawerLinkStyle>
              </ListItemText>
            </ListItem>
            <Divider/>
        </HomeDrawer>
      </Drawer>
      <DrawerIcon onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </DrawerIcon>
   </>
  );
}
export default DrawerComponent;