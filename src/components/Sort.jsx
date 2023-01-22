import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';


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
      backgroundColor: "#fffffg",
      '&:hover': {
        backgroundColor: "#A0A189",
        color:"#F0F5D1"

      },
      border: "1px solid #A0A189",
      borderRadius: "30px",
      color:"#5D885C",
      fontWeight:"bold",
      marginLeft:"20px",
      marginRight:"20px",
      paddingLeft:"25px",
      paddingRight:"25px"
  }));

export default function Sort() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{display:"inline-block","width":"300px"}}>
      <ColorButton onClick={handleOpen}>Sort By</ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sort By:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
                <Button key="one" style={buttonStyle}>Price</Button>
                <Button key="two" style={buttonStyle}>Time</Button>
                <Button key="three" style={buttonStyle}>Quantity</Button>
            </ButtonGroup>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
