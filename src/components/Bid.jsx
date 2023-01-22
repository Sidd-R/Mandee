import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
    width:"180px",
    color:"#4B4B4B",
    // borderColor: "#4B4B4B"
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#ffffff" ),
  backgroundColor: "#F0F5D1",
  '&:hover': {
      backgroundColor: "#A0A189",
      color:"#F0F5D1"
  },
  border: "none",
  borderRadius: "30px",
  color:"#5D885C",
  fontWeight:"bold",
  marginLeft:"20px",
  marginRight:"20px",
  paddingLeft:"25px",
  paddingRight:"25px",
  fontSize: "17px"
  }));

export default function Bid({details,profile,setProductlist}) {
  const nav = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [price, setPrice] = useState(details.price)

  const bid = ()=> {
    let temp = {
      fid:details.fid,
      bid:profile.uid,
      name:profile.company,
      quantity:details.quantity,
      picture: details.picture,
      price: price,
      revenue: details.quantity*price,
      type:0
    }
    axios.post('http://localhost:4000/deals',temp)
    axios.post(`http://localhost:4000/products/qty`,{price:price,pid:details.pid})
    // console.log(profile);
    setProductlist(null)
    nav('/dashboard')
  }

  return (
    <div style={{display:"inline-block"}}>
      <ColorButton onClick={handleOpen} variant="contained">Bid Now</ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rs.<input type="number" value={price} onChange={(e) => {if(e.target.value > details.price) setPrice(e.target.value)}} style={{width:"80px",marginLeft:"30px",height:"40px",fontSize:"20px",paddingLeft:"15px"}}/> /kg
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            <h4 style={{"textAlign":"center"}}>Current Price: Rs.{details.price}</h4>
            <h4 style={{"textAlign":"center"}}>Qty: {details.quantity}</h4>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
                <Button key="one"  variant="outlined" style={{margin:"40px",width:"100px"}} onClick={bid}>Bid</Button>
            </ButtonGroup>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
