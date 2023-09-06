import * as React from 'react';
import { Button, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, LinearProgress, Card, CardContent, CardMedia } from '@mui/material';
import { Fade, Slide, Bounce } from 'react-reveal';
import MenuIcon from '@mui/icons-material/Menu';
import myLogo from "../assets/LTH.png";
import checkIcon from "../assets/check.png";
import webdevIcon from "../assets/webdevelopment.jpg";
import mobiledevIcon from "../assets/mobileappdev.jpg";
import windowdevIcon from "../assets/windowappdev.jpg";
import uiuxIcon from "../assets/uiux.jpg";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone-call.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import getInTouchIcon from "../assets/getInTouch.jpg";
import githubIcon from "../assets/github.png";
import LinearProgressComponent from '../components/LinearProgressComponent';
import CardComponent from '../components/CardComponent';
const pages = ['Skills & Experiences', 'Services', 'Contact'];

const HomePage = ({ history }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenu = (page) => {
    if (page === "Contact") {
      const contactSection = document.getElementById("contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if (page === "Skills & Experiences") {
      const skillsAndExpSection = document.getElementById("skills&experiences");
      skillsAndExpSection.scrollIntoView({ behavior: "smooth" })
    }
    if (page === "Services") {
      const servicesSection = document.getElementById("services");
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }




  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={myLogo} width={50} height={50} style={{ borderRadius: 20, marginRight: "1%" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Crimson Pro',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Linn Thit Htoo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => [handleCloseNavMenu, handleMenu(page)]}>
                    <Typography textAlign="center" color="#000" component="a" sx={{textDecoration:"none"}}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Crimson Pro',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Linn Thit Htoo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => [handleCloseNavMenu, handleMenu(page)]}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    

      <div
        className="d-flex flex-lg-row flex-column justify-content-center align-items-center mt-5"
        style={{ flexDirection: { lg: 'row', xs: 'column' } }}
      >
        <div className="text-center" style={{marginRight:"5%"}}>
          <img src={myLogo} width={250} height={250}  />
        </div>
        <div
          className="text-center ml-lg-3 mt-3 mt-lg-0" // Add margin for spacing in LG mode
          style={{ flexDirection: 'column' }}
        >
          <Typography sx={{ fontSize: 40, fontFamily: 'Crimson Pro', fontWeight: 'bold' }}>
            I'm Linn Thit Htoo
          </Typography>
          <Typography variant='h5' sx={{ mt: 2, fontFamily: 'Crimson Pro' }} color='#6E3691'>
            Junior Fullstack Developer
          </Typography>
          <Button
            variant='outlined'
            sx={{ backgroundColor: '#93EFE4', color: '#000', mt: 3 }}
            onClick={() => {
              const aboutSection = document.getElementById("aboutMe");
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore More
          </Button>
        </div>
      </div>


      {/* about me section */}

      <div id='aboutMe' style={{ marginTop: "8%", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" textAlign="center" sx={{ fontFamily: 'Crimson Pro', fontWeight: "bold", fontSize: 35 }}>About Me</Typography>

        <Fade bottom>
          <div style={{ flexDirection: "row", marginTop: "2%", display: "flex" }}>
            <img src={checkIcon} width={50} height={50} style={{ marginLeft: "7%" }} />
            <Typography sx={{ alignSelf: "center", ml: 2 }}>Finished High School in 2022.</Typography>
          </div>
          <div style={{ flexDirection: "row", marginTop: "2%", display: "flex" }}>
            <img src={checkIcon} width={50} height={50} style={{ marginLeft: "7%" }} />
            <Typography sx={{ alignSelf: "center", ml: 2 }}>Junior Developer intern in NK Software House.</Typography>
          </div>
          <div style={{ flexDirection: "row", marginTop: "2%", display: "flex" }}>
            <img src={checkIcon} width={50} height={50} style={{ marginLeft: "7%" }} />
            <Typography sx={{ alignSelf: "center", ml: 2 }}>Currently learning Software Engineering.</Typography>
          </div>
        </Fade>

      </div>


      {/* skills & experiences */}
      <div id='skills&experiences' style={{ marginTop: '8%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2, fontFamily: 'Crimson Pro', fontWeight: "bold", fontSize: 35 }}>Skills & Experiences</Typography>
        <Fade bottom>
          <LinearProgressComponent leftContent="HTML" progress="90" color="#329CD7" />
        </Fade>
        {/* sec linear bar */}
        <Fade top>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="CSS" progress="40" color="#86D29B" />
          </div>
        </Fade>
        {/* 3rd linear bar */}
        <Fade bottom>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="Javascript (DOM)" progress="80" color="#B96DDD" />
          </div>
        </Fade>
        {/* 4th */}
        <Fade top>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="React" progress="40" color="#5964C4" />
          </div>
        </Fade>
        {/* 5th */}
        <Fade bottom>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="C#" progress="60" color="#D05AA1" />
          </div>
        </Fade>
        {/* 6th */}
        <Fade top>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="ASP .NET" progress="80" color="#1ADBDB" />
          </div>
        </Fade>
        {/* 7th */}
        <Fade bottom>
          <div style={{ marginTop: "4%" }}>
            <LinearProgressComponent leftContent="React Native" progress="60" color="#B43535" />
          </div>
        </Fade>
      </div>


      {/* services */}
     <div id="services">
     <Fade bottom>
        <Typography variant="h4" textAlign="center" sx={{ mt: "8%", mb: 3, fontFamily: 'Crimson Pro', fontWeight: "bold", fontSize: 35 }}>
          Services
        </Typography>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CardComponent
                title="Web Development"
                content="I excel at crafting responsive and visually appealing web designs while prioritizing maintainability and clean, well-structured code."
                image={webdevIcon}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CardComponent
                title="Mobile Application Development"
                content="I can provide responsive mobile applications for both Android and iOS platforms."
                image={mobiledevIcon}
              />
            </div>
          </div>
        </div>

        {/* 2nd row */}
        <div className="container text-center" style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <CardComponent
                title="Window Application Development"
                content="Proficient in developing window applications using ASP .NET"
                image={windowdevIcon}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <CardComponent
                title="UI UX"
                content=" Proficient in UI/UX design and prototype development using Figma, MUI, and Bootstrap. Skilled in implementing client-favorite designs in React Native using React Native Paper."
                image={uiuxIcon}
              />
            </div>
          </div>
        </div>
      </Fade>
     </div>

      <footer style={{ backgroundColor: "#e9e7e6" }}>
        <div className="container" id="contact">
          <h4 className="text-center my-3 py-5" style={{ fontFamily: 'Crimson Pro', fontWeight: "bold", fontSize: 35 }}>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-6 col-sm-12 text-center">
              <img
                src="https://www.nksoftwarehouse.com/portfolio/pyaephyoswe/images/contact.gif"
                alt="Get in Touch"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 col-sm-12" style={{ marginTop: "8%" }} >
              <div className="d-flex align-items-center mb-4">
                <img src={emailIcon} width={35} height={35} alt="Email Icon" />
                <a href="mailto:linnthit77387@gmail.com" className="ms-2">
                  linnthit77387@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center mb-4">
                <img src={phoneIcon} width={35} height={35} alt="Email Icon" />
                <a href="tel:09773871112" className="ms-2">
                  09773871112
                </a>
              </div>
              <div className="d-flex">
                <a
                  href="https://www.facebook.com/linnthit.htoo.3990"
                  target="_blank"
                  className="me-2"
                >
                  <img src={facebookIcon} width={35} height={35} alt="Facebook Icon" />
                </a>
                <a href="https://github.com/LTH77387" target="_blank" className="me-2">
                  <img src={githubIcon} width={35} height={35} alt="GitHub Icon" />
                </a>
                <a href="#" target="_blank">
                  <img src={linkedinIcon} width={35} height={35} alt="LinkedIn Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default HomePage;