import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Stack from "@mui/material/Stack";
import '../styles/Footer.css';

function Footer(){
    return(
        <footer className="footer">
            Connect with us!
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <TwitterIcon fontSize="large"></TwitterIcon>
            <InstagramIcon fontSize="large"></InstagramIcon>
            <FacebookIcon fontSize="large"></FacebookIcon>
            <LinkedInIcon fontSize="large"></LinkedInIcon>
        </Stack>
        <Stack id="footerDetails" direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
           <div><p>Location: Office of Mumbai</p></div>
           <div><p>Contact No.: 9823929292</p><p>9398489281</p></div>
           <div><YouTubeIcon></YouTubeIcon><p>Subscribe our youtube</p><p>channel to get more updates</p></div>
        </Stack>
        </footer>
    )
}

export default Footer;