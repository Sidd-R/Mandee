import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar({setLogin,setProfile,profile}) {
  const nav = useNavigate()
  let navitems
  if (profile == 1)
    navitems = [
      {name: "sales", link:"/sales"},
      {name: "dashboard", link:"/dashboard"},
      {name: "live market", link:"/livemarket"},
      {name: "nearby markets", link:"/nearby"},
      {name: "guidlines", link:"/guidelines"},
      {name: "logout", link:"/login"}
    ]
  else
    navitems = [
      {name: "sales", link:"/sales"},
      {name: "upload", link:"/upload"},
      {name: "dashboard", link:"/dashboard"},
      {name: "live market", link:"/livemarket"},
      {name: "nearby markets", link:"/nearby"},
      {name: "Kisan Seva", link:"/guidelines"},
      {name: "logout", link:"/login"}
    ]


  const logout = () => {
    setProfile({
      uid: 0,
      company: null,
      email: null,
      password: null,
      contact: null,
      profile: 0,
      location: null,
      rating: null,
      picture: null,
      name: null
    })
     setLogin(false)
    //  localStorage.setItem("login",false)
     nav('/login')

  }

  return (
    <div className="Navbar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Navbar">
          <NavLink to="/home">
          <IconButton 
          // style={{background:"rgb(219, 237, 173)"}}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={require("../images/Mandee 1.png")} alt="" style={{"height":"120px","margin":"-35px"}}/>
          </IconButton>
          </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          
          {navitems.map(e => {
            if (e.name === "logout"){
              return <Button color="inherit" onClick={logout}>
                      <NavLink to={e.link} underline="none" style={{"textDecoration":"none"}}>
                        <p className="Navbar-text">{e.name}</p>
                      </NavLink>
                    </Button>
              }
              else
            return(
              <Button color="inherit">
                <NavLink to={e.link} underline="none" style={{"textDecoration":"none"}}>
                  <p className="Navbar-text">{e.name}</p>
                </NavLink>
              </Button>
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
