import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from "../Drawer/Drawer";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const HomeAppBar = styled(AppBar)({
  background: '#F2F0FF !important', 
  boxShadow: 'none !important',
});

// const HomeAppBar = styled(AppBar)(({ theme }) => ({
//   background: '#F2F0FF', 
//   boxShadow: 'none',
//   [theme.breakpoints.up("sm")]: {
//     background: '#F2F0FF', 
//     boxShadow: 'none',
//   },
//   [theme.breakpoints.down("md")]: {
//     background: '#F2F0FF', 
//     boxShadow: 'none',
//   },
//   [theme.breakpoints.up("md")]: {
//     background: '#F2F0FF', 
//     boxShadow: 'none',
//   },
//   [theme.breakpoints.up("lg")]: {
//     background: '#F2F0FF', 
//     boxShadow: 'none',
//   },
// }));

const HomeToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 0px 0px 0px"
});

const LinkContainer = styled(Container)({
  margin: "0 auto",
  maxWidth: "1200px",
  width: '100%'
});

const LogoLinkStyle = styled(Link)({
  color: "#0D0E43",
  fontFamily: [
    'Josefin Sans',
    'sans-serif',
    ].join(','),
  fontSize: "34px",
});

const LinkStyles = styled(Link)({
  color: "#0D0E43",
  cursor: "pointer",
  fontSize: "16px",
  paddingBottom: "10px",
  '& + &': {
    marginLeft: "35px"
  },
  fontFamily: [
    'Lato',
    'sans-serif',
   ].join(','),
  '&:hover': { borderBottom: '4px solid #FB2E86' }  
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <HomeAppBar position="relative">
      <LinkContainer>
        <HomeToolbar>
          <LogoLinkStyle href="/" underline="none">
            Hekto
          </LogoLinkStyle>
          {isMobile ? (
            <Drawer />
           ) : (
             <Box >
               <LinkStyles href="/"  underline="none">
                 Home
               </LinkStyles>
               <LinkStyles href="/"  underline="none" >
                 Pages
               </LinkStyles>
               <LinkStyles href="/"  underline="none" >
                 Products
               </LinkStyles>
               <LinkStyles href="/"  underline="none" >
                 Blog 
               </LinkStyles>
               <LinkStyles href="/"  underline="none">
                 Shop
               </LinkStyles>
               <LinkStyles href="/"  underline="none">
                 Contact
               </LinkStyles>
             </Box>
           )}
        </HomeToolbar> 
      </LinkContainer>   
    </HomeAppBar>
  )
}

export default Header;