import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { ThemeProvider } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import theme from './material/theme';
import "./App.css";
import { getContactUsAction } from "./util/configuration";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SpeedDial
      className="speed_dial_whatsapp"
        ariaLabel="SpeedDial basic example"
        icon={<WhatsAppIcon />}
        onClick={() => window.location.href =getContactUsAction}
      > 
      </SpeedDial>
      <div>
        
        <Navigation />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team}  sx={{ position: 'absolute', bottom: 16, right: 16 }}/>
      </div>
      
    </ThemeProvider>
  );
};

export default App;
