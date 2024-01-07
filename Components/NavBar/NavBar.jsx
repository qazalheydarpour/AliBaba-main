import {AppBar, Toolbar, Container, Box} from "@mui/material";
import NavBarLeftBox from './NavBarLeftBox/NavBarLeftBox';
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import Logo from "./Logo/Logo";
import theme from '../../styles/theme'
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';


function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const NavBar = (props) => {
  
  return (
    <HideOnScroll {...props}>
      <AppBar sx={{background:theme.palette.white.main,fontFamily:"Alibaba"}} position="sticky">
          <Container>
            <Toolbar>
              <NavBarLeftBox />
              <NavBarMenu />
              <Logo/>
            </Toolbar>
          </Container>
        </AppBar>
    </HideOnScroll>
        
  );
};

export default NavBar;
